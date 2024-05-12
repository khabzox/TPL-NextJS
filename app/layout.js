import { Fira_Sans_Condensed } from "next/font/google";
import "./globals.css";
import config from "@/config";
import { getSEOTags } from "@/libs/seo";

const font = Fira_Sans_Condensed({ subsets: ["greek"], weight:["700"] });

export const metadata = getSEOTags();

export default function RootLayout({ children }) {
  return (
    <html lang="en"  data-theme={config.colors.theme} className={font.className}>
      <head>
      <script
          defer
          data-domain={config.domainName}
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
