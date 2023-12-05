import { Logo } from "assets/Logo";

export default function Footer() {
  return (
    <footer className="px-4 md:px-5 lg:px-24 mt-10 pb-4">
      <hr className="w-full border-[#242634] mt-12" />
      <div className="h-16 py-10 flex items-center">
        <Logo />
        <p className="ml-3 text-[#93989a]">Coders NTF. All rights reserved.</p>
      </div>
    </footer>
  );
}
