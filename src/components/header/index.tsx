import Link from "next/link";

import Navbar from "@/components/header/navbar";
import MainContainer from "@/components/partials/containers/main-container";
import ModeToggle from "./mode-toggle";
import Image from "next/image";

const Header = async () => {
  return (
    <div className="border-b">
      <MainContainer>
        <div className="relative h-16 lg:flex lg:items-center lg:justify-between">
          <div className="h-full flex justify-between items-center lg:justify-start">
            <Link href="/" className="flex gap-x-2">
              <p className="font-bold text-cl">
                <Image
                  src="/logo-persona.png"
                  alt="logo"
                  height={56}
                  width={56}
                  className="w-14"
                />
              </p>
            </Link>
            <div className="hidden lg:block">
              <Navbar />
            </div>
            <div className="lg:hidden flex gap-2 items-center">
              <ModeToggle />
            </div>
          </div>
          <div className="hidden lg:flex lg:gap-x-3">
            <ModeToggle />
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default Header;
