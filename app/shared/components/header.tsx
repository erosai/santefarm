"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full px-14 py-4 flex items-center justify-between bg-white sticky top-0 z-50 ">
      <Link href="/" className="">
        <Image src="/Logo.png" height={100} width={200} alt="Santefarm Logo" />
      </Link>
      <nav className="flex items-center space-x-6">
        <Link href="/about" className="text-gray-600 hover:text-gray-900">
          About
        </Link>
        <Link href="/services" className="text-gray-600 hover:text-gray-900">
          Services
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-gray-900">
          Contact
        </Link>
        <Button
          asChild
          className="bg-foreground hover:bg-foreground/80 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        >
          <Link href="https://online.santefarm.com">Order Online</Link>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
