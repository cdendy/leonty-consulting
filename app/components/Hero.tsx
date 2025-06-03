'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaButtonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (headlineRef.current) {
      tl.fromTo(
        headlineRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, delay: 0.2 }
      );
    }
    if (taglineRef.current) {
      tl.fromTo(
        taglineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4' // Overlap with previous animation
      );
    }
    if (ctaButtonRef.current) {
      tl.fromTo(
        ctaButtonRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
        '-=0.3'
      );
    }
  }, []);

  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" // Ensure this image exists in public/images
        alt="Inspiring keynote speaker addressing an audience"
        fill
        priority
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black/60 -z-10" /> {/* Overlay */}

      <div className="relative z-10 p-6">
        <h1 ref={headlineRef} className="text-5xl md:text-7xl font-bold mb-6">
          {/* Split headline for animation */}
          <span>Unlock</span> <span>Your</span> <span>Potential.</span>
        </h1>
        <p ref={taglineRef} className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
          Erin Leonty empowers leaders and organizations to achieve peak performance through transformative coaching and impactful keynotes.
        </p>
        <Link
          href="/contact"
          ref={ctaButtonRef}
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
