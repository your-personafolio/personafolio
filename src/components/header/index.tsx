import Link from "next/link";

import CartButton from "@/components/header/cart-button";
import MobileNavbar from "@/components/header/mobile-navbar";
import ModeToggle from "@/components/header/mode-toggle";
import Navbar from "@/components/header/navbar";
import MainContainer from "@/components/partials/containers/main-container";

const Header = async () => {
  return (
    <div className="border-b">
      <MainContainer>
        <div className="relative h-16 lg:flex lg:items-center lg:justify-between">
          <div className="h-full flex justify-between items-center lg:justify-start">
            <Link href="/" className="flex gap-x-2">
              <p className="font-bold text-cl">
                <img src="/logo-persona.png" alt="" className="w-14" />
              </p>
            </Link>
            <div className="hidden lg:block">
              <Navbar />
            </div>
            <div className="lg:hidden flex gap-2 items-center">
              <MobileNavbar />
              <CartButton />
            </div>
          </div>
          <div className="hidden lg:flex lg:gap-x-3">
            <ModeToggle />
            <CartButton />
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default Header;
