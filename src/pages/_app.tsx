import "~/styles/globals.css";
import { api } from "~/utils/api";
import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";

const App: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
      <Analytics />
    </ClerkProvider>
  );
};

export default api.withTRPC(App);
