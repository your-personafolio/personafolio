import Link from "next/link";

import Navbar from "@/components/header/navbar";
import ModeToggle from "./mode-toggle";
import Image from "next/image";

const Header = async () => {
  return (
    <div className="relative h-16 flex justify-center mt-4">
      <div className="bg-white/40 backdrop-blur-md flex items-center rounded-full gap-3 px-3">
        <div className="h-full flex justify-between items-center max-sm:gap-3">
          <Link href="/" className="flex gap-x-2">
            <p className="font-bold text-cl">
              <Image
                src="/logo-persona.png"
                alt="logo"
                height={40}
                width={40}
              />
            </p>
          </Link>

          <div className="lg:hidden flex gap-2 items-center">
            <ModeToggle />
          </div>
        </div>
        <div className="hidden lg:flex">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
