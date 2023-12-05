import { ThirdwebProvider } from "@thirdweb-dev/react";
import Progress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";

import Layout from "./_layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain="sepolia">
      <Layout>
        <Component {...pageProps} />
        <Progress
          color="#FF2748"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
        />
        <Toaster
          position="bottom-center"
          reverseOrder={true}
          toastOptions={{
            duration: 4000,
          }}
        />
      </Layout>
    </ThirdwebProvider>
  );
}
