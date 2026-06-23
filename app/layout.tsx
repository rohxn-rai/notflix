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
        <Script id="alloy-prehiding-script" strategy="beforeInteractive">
          {`
            !function(e,a,n,t){var i=e.head;if(i){
            if (a) return;
            var o=e.createElement("style");
            o.id="alloy-prehiding",o.innerText=n,i.appendChild(o),setTimeout(function(){o.parentNode&&o.parentNode.removeChild(o)},t)}}
            (document, document.location.href.indexOf("adobe_authoring_enabled") !== -1, ".personalization-container { opacity: 0 !important }", 3000);
          `}
        </Script>
        <Script
          id="adobe-launch"
          src="https://assets.adobedtm.com/6a203c8a0ff8/a6559a6d05ed/launch-0eda22f958c8-development.min.js"
          async
        />
      </head>
      <body className={`${jetbrainsMono.variable}`}>{children}</body>
    </html>
  );
};

export default RootLayout;
