"use client";

import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Link from "next/link";

import ModeToggle from "@/components/header/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger className="rounded-md border p-2">
        <Menu className="size-[1.2rem]" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetTitle />
        <div className="size-full flex flex-col">
          <div className="mt-6 flex items-center justify-between">
            <h2 className="font-bold">STORE</h2>

            <ModeToggle />
          </div>
          <nav className="flex flex-col gap-2 mt-3">
            <Link
              href="/store"
              className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors font-medium dark:text-gray-300"
            >
              Store
            </Link>
            {/* <Link
              href="/blog"
              className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors font-medium dark:text-gray-300"
            >
              Blog
            </Link> */}
          </nav>
          <div className="mt-auto flex justify-between">
            <div>
              <UserButton />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
