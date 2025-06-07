"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "./Loader"; // pastikan path-nya benar

export default function LoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500); // durasi loader
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && <Loader />}
      <div
        className={
          loading
            ? "pointer-events-none opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }
      >
        {children}
      </div>
    </>
  );
}
