"use client";

import Link from "next/link";

export const revalidate = 0;

const Navbar = () => {
  return (
    <nav className="flex items-center space-x-4 mx-6 lg:space-x-6">
      <Link
        href="/store"
        className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors font-mediumtext-gray-900 dark:text-gray-300"
      >
        Store
      </Link>
      {/* <Link
        href="/blog"
        className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors font-mediumtext-gray-900 dark:text-gray-300"
      >
        Blog
      </Link> */}
    </nav>
  );
};

export default Navbar;
