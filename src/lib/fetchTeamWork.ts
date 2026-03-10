import fs from 'fs';
import path from 'path';
import { WorkItem } from '../types';

interface GitHubContentResponse {
  content: string;
  encoding: string;
}

interface RawWorkItem {
  title?: string;
  description?: string;
  tags?: string[];
  url?: string;
  date?: string;
  authors?: string[];
}

interface TeamMember {
  username: string;
  repo: string;
  displayName: string;
  twitter: string;
  branch: string;
}

function parseTeamMembers(): TeamMember[] {
  const teamFile = path.join(process.cwd(), 'TEAM_MEMBERS.txt');
  try {
    const content = fs.readFileSync(teamFile, 'utf-8');
    return content
      .split('\n')
      .filter(line => line.trim() && !line.startsWith('#'))
      .map(line => {
        const parts = line.trim().split('/');
        return {
          username: parts[0],
          repo: parts[1] || 'crypto-work',
          displayName: parts[2] || parts[0],
          twitter: parts[3] || '',
          branch: parts[4] || 'main'
        };
      });
  } catch {
    return [];
  }
}

async function fetchGitHubFile(username: string, repo: string, filepath: string, branch: string): Promise<RawWorkItem[] | null> {
  const url = `https://api.github.com/repos/${username}/${repo}/contents/${filepath}?ref=${branch}`;
  const headers: Record<string, string> = {
    'User-Agent': 'Cryptography-Research-Site',
    'Accept': 'application/vnd.github.v3+json'
  };

  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(url, { headers });

  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const data: GitHubContentResponse = await res.json();
  const content = Buffer.from(data.content, 'base64').toString('utf-8');
  return JSON.parse(content);
}

export async function fetchTeamWork(): Promise<WorkItem[]> {
  const members = parseTeamMembers();
  if (members.length === 0) return [];

  const results = await Promise.allSettled(
    members.map(async (member) => {
      const data = await fetchGitHubFile(member.username, member.repo, 'work.json', member.branch);
      if (!data || !Array.isArray(data)) return [];

      return data
        .filter(item => item && item.title)
        .map(item => ({
          title: item.title!,
          description: item.description || '',
          tags: item.tags || [],
          url: item.url || '',
          date: item.date || '',
          author: member.username,
          authorDisplay: member.displayName,
          authorTwitter: member.twitter || null,
          authors: item.authors || null
        }));
    })
  );

  for (const [i, result] of Array.from(results.entries())) {
    if (result.status === 'rejected') {
      console.error(`[fetchTeamWork] Error fetching from ${members[i].username}/${members[i].repo}: ${result.reason}`);
    }
  }

  const allWork: WorkItem[] = results.flatMap(r =>
    r.status === 'fulfilled' ? r.value : []
  );

  allWork.sort((a, b) => {
    if (a.date && b.date) return new Date(b.date).getTime() - new Date(a.date).getTime();
    if (a.date && !b.date) return -1;
    if (!a.date && b.date) return 1;
    return 0;
  });

  return allWork;
}
