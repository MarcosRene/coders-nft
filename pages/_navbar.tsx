import { useRouter } from "next/router";
import { ConnectWallet } from "@thirdweb-dev/react";

import { Logo } from "assets/Logo";

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <header className="h-20 px-[10%] py-10 flex items-center justify-between">
        <div
          onClick={() => router.push("/")}
          className="flex items-center cursor-pointer"
        >
          <Logo />
          <p className="ml-3 font-semibold">Coders NFT</p>
        </div>

        <ConnectWallet modalSize="compact" />
      </header>
      <hr className="w-full border-[#242634]" />
    </>
  );
}
