"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 md:px-14 py-4 flex items-center justify-between bg-white sticky top-0 z-50 ">
      <Link href="/" className="">
        <Image
          src="/Logo.png"
          height={80}
          width={160}
          alt="Santefarm Logo"
          className="h-10 w-auto md:h-10"
        />
      </Link>

      <nav className="hidden md:flex items-center space-x-6">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-gray-600 hover:text-gray-900 flex items-center gap-1 outline-none">
            About
            <ChevronDown
              size={16}
              className="transition-transform duration-200"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuItem asChild>
              <Link href="/about" className="w-full cursor-pointer">
                About Us
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/timeline" className="w-full cursor-pointer">
                Timeline
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/news" className="w-full cursor-pointer">
                News
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link href="/services" className="text-gray-600 hover:text-gray-900">
          Services
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-gray-900">
          Contact
        </Link>
        <Button
          asChild
          className="bg-foreground hover:bg-foreground/90 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        >
          <Link href="https://online.santefarm.com">Order Online</Link>
        </Button>
      </nav>

      <button
        className="md:hidden p-2 text-gray-600 hover:text-gray-900"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg md:hidden">
          <div className="flex flex-col p-4 space-y-4">
            <div className="flex flex-col space-y-2">
              <span className="text-gray-400 text-sm font-semibold ">
                About
              </span>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 py-2 pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/timeline"
                className="text-gray-600 hover:text-gray-900 py-2 pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Timeline
              </Link>
              <Link
                href="/news"
                className="text-gray-600 hover:text-gray-900 py-2 pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                News
              </Link>
            </div>

            <Link
              href="/services"
              className="text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              asChild
              className="bg-foreground hover:bg-foreground/90 text-white px-6 py-2 rounded-lg font-semibold shadow-lg w-full"
            >
              <Link
                href="https://online.santefarm.com"
                onClick={() => setMobileMenuOpen(false)}
              >
                Order Online
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
