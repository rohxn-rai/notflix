"use client";

import { useEffect, useRef } from "react";

interface AdobeTargetMboxProps {
  mbox: string;
  params?: Record<string, string>;
  children?: React.ReactNode;
  className?: string;
}

const AdobeTargetMbox = ({
  mbox,
  params,
  children,
  className,
}: AdobeTargetMboxProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const fireOffer = () => {
      if (window.adobe && window.adobe.target) {
        window.adobe.target.getOffer({
          mbox: mbox,
          params: params || {},
          success: function (offer) {
            window.adobe.target.applyOffer({
              mbox: mbox,
              selector: containerRef.current,
              offer: offer,
            });
          },
          error: function (error) {
            console.error("Adobe Target Offer Error:", error);
            if (containerRef.current) {
              containerRef.current.style.visibility = "visible";
            }
          },
        });
        return true;
      }
      return false;
    };

    if (!fireOffer()) {
      intervalId = setInterval(() => {
        const isReady = fireOffer();
        if (isReady) {
          clearInterval(intervalId);
          clearTimeout(timeoutId);
        }
      }, 100);

      timeoutId = setTimeout(() => {
        clearInterval(intervalId);
        if (containerRef.current) {
          containerRef.current.style.visibility = "visible";
        }
        console.warn("Adobe Target timed out.");
      }, 5000);
    }

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [mbox, params]);

  return (
    <div ref={containerRef} className={`mboxDefault${className || ""}`}>
      {children}
    </div>
  );
};

export default AdobeTargetMbox;
