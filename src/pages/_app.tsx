import "~/styles/globals.css";
import { api } from "~/utils/api";
import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";

const App: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(App);
