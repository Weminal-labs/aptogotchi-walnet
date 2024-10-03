"use client";

import { WalletProvider } from "@/context/WalletProvider";
import { PropsWithChildren, useEffect } from "react";
import { WrongNetworkAlert } from "@/components/WrongNetworkAlert";

export default function ClientLayout({ children }: PropsWithChildren) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-web-app.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <WalletProvider>
      <WrongNetworkAlert />
      {children}
    </WalletProvider>
  );
}