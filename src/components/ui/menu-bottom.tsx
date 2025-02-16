"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MenuBottom = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {/* Tombol untuk menampilkan kembali menu */}
      {!isVisible && (
        <button
          className="fixed bottom-6 right-6 bg-personaGray text-light py-2 px-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          onClick={() => setIsVisible(true)}
        >
          Menu
        </button>
      )}

      {/* Menu Bottom dengan transisi */}
      <div
        className={`fixed bottom-6 inset-x-0 text-center z-50 transition-all duration-300 transform ${
          isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div className="relative inline-block bg-light shadow-lg border border-solid rounded-full py-3 px-4 dark:bg-neutral-800">
          {/* Tombol X untuk menutup menu */}
          <button
            className="absolute -top-3 -right-3 bg-personaGray text-light w-6 h-6 rounded-full text-sm flex items-center justify-center transition-transform duration-300 hover:rotate-180"
            onClick={() => setIsVisible(false)}
          >
            ✕
          </button>

          <div className="flex items-center gap-x-1.5">
            <div className="inline-block">
              <Link
                href="/"
                className=" flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              >
                <Image
                  alt="icon-home"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhvdXNlIj48cGF0aCBkPSJNMTUgMjF2LThhMSAxIDAgMCAwLTEtMWgtNGExIDEgMCAwIDAtMSAxdjgiLz48cGF0aCBkPSJNMyAxMGEyIDIgMCAwIDEgLjcwOS0xLjUyOGw3LTUuOTk5YTIgMiAwIDAgMSAyLjU4MiAwbDcgNS45OTlBMiAyIDAgMCAxIDIxIDEwdjlhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ6Ii8+PC9zdmc+"
                  width={24}
                  height={24}
                />
                Home
              </Link>
            </div>

            <div className="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>

            <div className="inline-block">
              <Link
                href="/store"
                className="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              >
                <Image
                  alt="icon-home"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBhaW50YnJ1c2gtdmVydGljYWwiPjxwYXRoIGQ9Ik0xMCAydjIiLz48cGF0aCBkPSJNMTQgMnY0Ii8+PHBhdGggZD0iTTE3IDJhMSAxIDAgMCAxIDEgMXY5SDZWM2ExIDEgMCAwIDEgMS0xeiIvPjxwYXRoIGQ9Ik02IDEyYTEgMSAwIDAgMC0xIDF2MWEyIDIgMCAwIDAgMiAyaDJhMSAxIDAgMCAxIDEgMXYyLjlhMiAyIDAgMSAwIDQgMFYxN2ExIDEgMCAwIDEgMS0xaDJhMiAyIDAgMCAwIDItMnYtMWExIDEgMCAwIDAtMS0xIi8+PC9zdmc+"
                  width={24}
                  height={24}
                />
                Store
              </Link>
            </div>

            <div className="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>

            <div className="inline-flex">
              <Link
                href="/cart"
                className="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              >
                <Image
                  alt="icon-home"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNob3BwaW5nLWJhZyI+PHBhdGggZD0iTTYgMiAzIDZ2MTRhMiAyIDAgMCAwIDIgMmgxNGEyIDIgMCAwIDAgMi0yVjZsLTMtNFoiLz48cGF0aCBkPSJNMyA2aDE4Ii8+PHBhdGggZD0iTTE2IDEwYTQgNCAwIDAgMS04IDAiLz48L3N2Zz4="
                  width={24}
                  height={24}
                />
                Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBottom;
