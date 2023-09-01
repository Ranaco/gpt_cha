import * as React from "react";
import Head from "next/head";

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="author" content="Ranaco" />
        <meta name="author" content="https://github.com/Ranaco/" />
        <meta
          name="description"
          content="AI-enabled Custom onboarding process!! Powered by Rakuten"
        />
        <title>Onboarding</title>
      </Head>
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default Main;
