/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout";

const Homepage = () => {
  return (
    <Layout>
      <div
        sx={{
          padding: [4, 4, 5],
        }}
      >
        <h1 sx={{ textAlign: "center" }}>
          Welcome to Cryptography Research at the Ethereum Foundation
        </h1>
        <p>
          The Ethereum Foundation leads research into cryptographic protocols
          that are useful within the greater Ethereum community and more
          generally. Cryptography is a key tool that enables greater
          functionality, security, efficiency, and auditability in decentralized
          settings. We are currently conducting research into verifiable delay
          functions, multiparty computation, vector commitments, and
          zero-knowledge proofs etc. We have a culture of open source and no
          patents are put on any work that we produce.
        </p>
      </div>
    </Layout>
  );
};

export default Homepage;
