"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-black z-50 transition-opacity duration-1000 flex items-center justify-center overflow-hidden ${
        hide ? "opacity-0 pointer-events-none" : ""
      }`}
    >
      <Image
        src="/logo-fix.png"
        alt="Logo"
        width={100}
        height={100}
        className="animate-bounce-shrink"
      />
      <div className="animate-expand" />
    </div>
  );
}
