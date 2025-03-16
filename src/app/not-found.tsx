import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-personaSec">
      <div className="text-center">
        <div className="flex gap-3 items-center mb-5 justify-center">
          <Image src="/logo-persona.png" alt="Logo" height={80} width={80} />
          <h2 className="text-5xl font-bold text-light">404 Not Found</h2>
        </div>
        <Link
          className="py-3 px-4 bg-personaPri rounded-full text-light font-medium"
          href="/"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
