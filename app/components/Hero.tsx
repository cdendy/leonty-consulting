// components/Header.tsx
'use client';

import Image from "next/image";
import Link from "next/link";                // ← make sure this import is here
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import StaggerButton from "./StaggerButton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/keynotes", label: "Keynotes" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    const svgVariants = [
      `<svg width="310" height="40" viewBox="0 0 310 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 20.9999C26.7762 16.2245 49.5532 11.5572 71.7979 14.6666C84.9553 16.5057 97.0392 21.8432 109.987 24.3888C116.413 25.6523 123.012 25.5143 129.042 22.6388C135.981 19.3303 142.586 15.1422 150.092 13.3333C156.799 11.7168 161.702 14.6225 167.887 16.8333C181.562 21.7212 194.975 22.6234 209.252 21.3888C224.678 20.0548 239.912 17.991 255.42 18.3055C272.027 18.6422 288.409 18.867 305 17.9999" stroke="currentColor" stroke-width="10" stroke-linecap="round"/></svg>`,
      // … (other SVG strings) …
      `<svg width="310" height="40" viewBox="0 0 310 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 29.8857C52.3147 26.9322 99.4329 21.6611 146.503 17.1765C151.753 16.6763 157.115 15.9505 162.415 15.6551C163.28 15.6069 165.074 15.4123 164.383 16.4275C161.704 20.3627 157.134 23.7551 153.95 27.4983C153.209 28.3702 148.194 33.4751 150.669 34.6605C153.638 36.0819 163.621 32.6063 165.039 32.2029C178.55 28.3608 191.49 23.5968 204.869 19.5404C231.903 11.3436 259.347 5.83254 288.793 5.12258C294.094 4.99476 299.722 4.82265 305 5.45025" stroke="#E55050" stroke-width="10" stroke-linecap="round"/></svg>`
    ];

    function decorateSVG(svgEl: SVGSVGElement) {
      svgEl.setAttribute("class", "text-draw__box-svg");
      svgEl.setAttribute("preserveAspectRatio", "none");
      svgEl.querySelectorAll("path").forEach((path) => {
        path.setAttribute("stroke", "currentColor");
      });
    }

    let nextIndex: number | null = null;

    document.querySelectorAll<HTMLElement>("[data-draw-line]").forEach((container) => {
      const box = container.querySelector<HTMLElement>("[data-draw-line-box]");
      if (!box) return;

      let enterTween: gsap.core.Tween | null = null;
      let leaveTween: gsap.core.Tween | null = null;

      container.addEventListener("mouseenter", () => {
        if (enterTween && enterTween.isActive()) return;
        if (leaveTween && leaveTween.isActive()) leaveTween.kill();

        if (nextIndex === null) {
          nextIndex = Math.floor(Math.random() * svgVariants.length);
        }

        box.innerHTML = svgVariants[nextIndex];
        const svg = box.querySelector<SVGSVGElement>("svg");
        if (svg) {
          decorateSVG(svg);
          const path = svg.querySelector<SVGPathElement>("path");
          if (path) {
            gsap.set(path, { drawSVG: "0%" });
            enterTween = gsap.to(path, {
              duration: 0.5,
              drawSVG: "100%",
              ease: "power2.inOut",
              onComplete: () => {
                enterTween = null;
              },
            });
          }
        }

        nextIndex = (nextIndex + 1) % svgVariants.length;
      });

      container.addEventListener("mouseleave", () => {
        const path = box.querySelector<SVGPathElement>("path");
        if (!path) return;

        const retract = () => {
          if (leaveTween && leaveTween.isActive()) return;
          leaveTween = gsap.to(path, {
            duration: 0.5,
            drawSVG: "100% 100%",
            ease: "power2.inOut",
            onComplete: () => {
              leaveTween = null;
              box.innerHTML = "";
            },
          });
        };

        if (enterTween && enterTween.isActive()) {
          enterTween.eventCallback("onComplete", retract);
        } else {
          retract();
        }
      });
    });
  }, [pathname]);

  // Collapse mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" aria-label="Leonty Consulting Logo" className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="Leonty Consulting logo"
            width={190}
            height={55}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                relative inline-block text-gray-800 font-medium transition-colors hover:text-gray-900
                ${pathname === link.href ? "font-semibold" : ""}
              `}
              data-draw-line
            >
              <span className="text-draw inline-block">
                <span className="text-draw__span">{link.label}</span>
                <div data-draw-line-box className="text-draw__box"></div>
              </span>
            </Link>
          ))}
        </nav>

        {/* Desktop “Get in Touch” Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <StaggerButton
              textColorClass="text-white"
              bgColorClass="bg-[#0073E5]"
              borderColorClass="border-none"
              className="flex items-center gap-[16px] rounded-[50px] px-6 py-3"
            >
              Get in Touch
              <span className="inline-flex items-center justify-center w-[28px] h-[28px] rounded-full bg-white">
                <img
                  src="/images/arrow_right_blue_sm.svg"
                  alt=""
                  className="w-[12px] h-[12px]"
                />
              </span>
            </StaggerButton>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                block px-3 py-2 rounded-md text-base font-medium
                ${pathname === link.href
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
