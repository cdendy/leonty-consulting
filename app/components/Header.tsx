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
    <header className="sticky top-0 z-50" style={{ background: 'transparent', boxShadow: 'none' }}>
      <div className="hidden sm:block h-10" /> {/* Spacer for 40px transparent gap, only on sm+ screens */}
      <div
        className="container mx-auto px-6 py-4 flex justify-between items-center bg-white rounded-[20px]"
        style={{ boxShadow: '0px 4px 11.8px 0px rgba(0, 0, 0, 0.08)' }}
      >
        <Link href="/" aria-label="Leonty Consulting" className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="Leonty Consulting logo"
            width={190}
            height={55}
            // className="h-10 w-auto"
            priority
          />
        </Link>

        <Nav />
      </div>
    </header>
  );
}
