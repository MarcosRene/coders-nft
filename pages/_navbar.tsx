import { Logo } from "assets/Logo";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter()

  return (
    <header>
      <div 
        onClick={() => router.push('/')}
        className="h-2 px-24 py-10 flex items-center cursor-pointer" 
      >
        <Logo />
        <p className="ml-3 font-semibold">Coders NFT</p>
      </div>
      <hr className="w-full border-[#242634]" />
    </header>
  );
}

