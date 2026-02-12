export {};

declare global {
  interface Window {
    adobe: {
      target: {
        getOffer: (options: {
          mbox: string;
          params?: Record<string, string>;
          success: (offer: any) => void;
          error: (error: any) => void;
        }) => void;
        applyOffer: (options: {
          mbox: string;
          selector?: HTMLElement | null;
          offer: any;
        }) => void;
      };
    };
  }
}
