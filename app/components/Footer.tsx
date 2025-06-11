import Link from 'next/link';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black w-full">
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center gap-3">
          <Image
            src="/images/footer-logo-full.svg"
            alt="Leonty Consulting Inc. logo"
            width={160}
            height={32}
            priority
            className="h-8 w-auto"
          />
          {/* Optionally, add company name if not in SVG: */}
          {/* <span className="text-white font-semibold text-base md:text-lg">Leonty Consulting Inc.</span> */}
        </div>
        <div className="text-white text-sm md:text-md text-right">
          &copy; {new Date().getFullYear()} Leonty Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
