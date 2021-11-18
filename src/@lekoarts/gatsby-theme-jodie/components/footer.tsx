/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import { readableColor } from "polished";

const Footer = ({ bg }: { bg: string }) => {
  const {
    theme: { rawColors },
  } = useThemeUI();

  const text = readableColor(
    bg,
    rawColors!.textMuted as string | undefined,
    rawColors!.textMutedLight as string | undefined
  );

  return (
    <footer
      sx={{
        position: [`relative`, `relative`, `relative`, `fixed`],
        width: (t: any): any => [
          `100%`,
          `100%`,
          `100%`,
          t.sidebar.normal,
          t.sidebar.wide,
        ],
        bottom: 0,
        color: text,
        fontSize: 0,
        p: [3, 3, 4],
        background: bg,
        a: {
          color: readableColor(bg),
          "&:hover,&:focus": {
            color: readableColor(bg, `primary`, `primaryLight`, false),
          },
        },
        variant: `footer`,
      }}
    >
      <div>
        <a href="mailto:cryptography@ethereum.org">cryptography@ethereum.org</a>
      </div>
      <div>&copy; {new Date().getFullYear()} Ethereum Foundation.</div>
    </footer>
  );
};

export default Footer;
