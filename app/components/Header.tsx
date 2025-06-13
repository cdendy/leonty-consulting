// components/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import StaggerButton from "./StaggerButton";
import Nav from "./Nav";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/keynotes", label: "Keynotes" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Collapse mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* <div className="h-2.5 sm:h-10" /> */}
      <header className="fixed  left-0 right-0 md:pt-[10px] pb-[20px] z-50 md:backdrop-blur-md">
        <div
          className="container mx-auto md:px-5.75 px-3 md:py-5 py-3 flex justify-between items-center bg-white md:rounded-full"
          style={{ boxShadow: '0px 4px 11.8px 0px rgba(0, 0, 0, 0.08)' }}
        >
          <Link href="/" aria-label="Leonty Consulting" className="flex items-center">
            <Image
              src="/images/mark-black.svg"
              alt="Leonty Consulting logo mark only"
              width={48}
              height={48}
              priority
              className="block md:hidden"
            />
            <Image
              src="/images/logo-2.svg"
              alt="Leonty Consulting logo"
              width={190}
              height={63}
              priority
              className="hidden md:block"
            />
          </Link>

          <Nav />
        </div>
      </header>
    </>
  );
}