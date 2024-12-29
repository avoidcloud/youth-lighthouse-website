import "antd/dist/reset.css";
import "@/styles/globals.css";

import React from "react";
import type { AppProps } from "next/app";
import { AppHead } from "@/components/AppHead";
import { AppThemeProvider } from "@/components/layout/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <AppHead />
      <Component {...pageProps} />
    </AppThemeProvider>
  );
}
