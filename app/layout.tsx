import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "NotFlix",
  description: "Testing Application for Adobe Experience Solutions.",
  icons: {
    icon: "/icon.svg",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        {/* <Script id="at-pre-hiding" async>
          {`
            ;(function(win, doc, style, timeout) {
              var STYLE_ID = 'at-body-style';
              function getParent() {
                return doc.getElementsByTagName('head')[0];
              }
              function addStyle(parent, id, def) {
                if (!parent) { return; }
                var style = doc.createElement('style');
                style.id = id;
                style.innerHTML = def;
                parent.appendChild(style);
              }
              function removeStyle(parent, id) {
                if (!parent) { return; }
                var style = doc.getElementById(id);
                if (!style) { return; }
                parent.removeChild(style);
              }
              addStyle(getParent(), STYLE_ID, style);
              setTimeout(function() {
                removeStyle(getParent(), STYLE_ID);
              }, timeout);
            }(window, document, "body {opacity: 0 !important}", 3000));
          `}
        </Script> */}
        <Script
          id="adobe-launch"
          src="https://assets.adobedtm.com/6a203c8a0ff8/bc24c6001550/launch-75c76c716733-development.min.js"
          async
        />
      </head>
      <body className={`${jetbrainsMono.variable}`}>{children}</body>
    </html>
  );
};

export default RootLayout;
