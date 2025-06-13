"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image'; 
import Link from 'next/link';
import StaggerButton from './components/StaggerButton'; 

export default function HomePage() {
  return (
<div className="space-y-24">
      {/* ───────────────────── HERO ───────────────────── */}
      <section
        className="relative h-[90vh] flex flex-col justify-center text-white px-6 overflow-hidden mt-0 sm:mt-[-127px]"
      >
        <Image
          src="/images/crowd.webp"
          alt="Erin Leonty keynote speaker background"
          fill
          className="object-cover -z-10"
          priority
        />
        {/* Overlay to darken the image slightly for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-30 -z-10"></div>
        {/* Content container with relative positioning and higher z-index */}
        <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-12 gap-5 pt-0 sm:pt-[127px]">
          <div className="col-span-12 md:col-span-6 md:col-start-1 flex flex-col items-start">
            <h1 className="home-lede text-white mb-7 leading-[.9] md:ml-[-32px]">
              Ignite your pride
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-white">
            Erin Leonty ignites pride by empowering audiences to embrace their authentic selves. Through compelling storytelling and strategic insight, she inspires leaders to create cultures where everyone thrives, transforming workplaces into spaces of belonging and impact.
            </p>
            <div className="mt-8 space-x-4">
            {/* <button type="button" className="btn-watch-erin">
              <span>Watch Erin</span>
              <img
                src="/images/play_circle_blue.svg"
                alt="Play icon"
                className="btn-watch-erin-icon"
              />
            </button> */}
            <StaggerButton
              icon={
              <img src="/images/play_circle_blue.svg" alt="Play icon" className="h-[20px] w-[20px]" />
              }
              >
              Watch Erin
            </StaggerButton>
            {/* <StaggerButton >
              Book Erin to Speak
            </StaggerButton> */}
            <StaggerButton
  textColorClass="text-[#0A0D12]"                      // keep or change as needed
  bgColorClass="bg-[#F3CF4E]"                           // background: #F3CF4E
  borderColorClass="border-[2px] border-[var(--Gradient-skeuemorphic-gradient-border,rgba(255,255,255,0.12))]"
  className="
    rounded-[39px] 
    shadow-[0px_0px_0px_1px_rgba(10,13,18,0.18)_inset,
            0px_-2px_0px_rgba(10,13,18,0.05)_inset,
            0px_1px_2px_rgba(10,13,18,0.05)]
  "
>
  Book Erin to Speak
</StaggerButton>
            </div>
          </div>
        </div> {/* Closing tag for className="relative z-10" */}
      </section>

      {/* ───────────── ABOUT PREVIEW ───────────── */}
      <section className="fadeSection px-6 mx-auto max-w-340 grid grid-cols-12 gap-5 mb-36">
    <div className="col-span-12 md:col-span-6 md:col-start-1">
      <p className="section-eyebrow">About</p>
      <h2 className="section-heading mt-2 mb-8">
        Transformative leadership that creates lasting impact
      </h2>
      <p className="text-gray-700">
        Based in Edmonton, Alberta, Erin Leonty is a sought-after keynote speaker and workplace culture
        expert who helps organizations across Western Canada create cultures where everyone can thrive.
        As a leading diversity and inclusion speaker in Canada, Erin bridges the gap between intention
        and impact through authentic leadership development.
      </p>
      <Link href="/about" className="mt-4 inline-block text-black underline">
        Learn More About Erin →
      </Link>
      <h3 className="mt-10 text-[20px] font-bold leading-[28px] text-[#181D27]">
        Strategic transformation expertise
      </h3>
      <p className="mt-2 text-[18px] leading-[28px] text-[#4B5057]">
        Drawing from her success at companies like Clio, where she increased women&apos;s leadership representation by 31%, Erin brings pragmatic approaches that deliver quantifiable business results through people-first strategies.
      </p>

      {/* Second item */}
      <h3 className="mt-8 text-[20px] font-bold leading-[28px] text-[#181D27]">
        Authentic leadership presence
      </h3>
      <p className="mt-2 text-[18px] leading-[28px] text-[#4B5057]">
        Erin creates safe environments where leaders can navigate complex challenges with confidence. Her approach balances strategic excellence with genuine connection, fostering cultures where everyone can contribute their talents.
      </p>

      {/* Third item */}
      <h3 className="mt-8 text-[20px] font-bold leading-[28px] text-[#181D27]">
        Bridge-building approach
      </h3>
      <p className="mt-2 text-[18px] leading-[28px] text-[#4B5057]">
        Whether working with C-suite executives or facilitating team workshops, Erin helps organizations bridge intention and impact. She transforms workplace cultures by connecting business performance with human potential.
      </p>
    </div>
    <div className="hidden md:block mt-8 md:mt-0 h-100% bg-gray-200 rounded col-span-6 col-start-7" />
    {/* img placeholder above */}
  </section>

      {/* ───────────── FEATURED TOPICS ───────────── */}
    <section className="fadeSection px-6 mx-auto max-w-340 grid grid-cols-12 gap-5 mb-36">
    <p className="section-eyebrow">Speaking</p>
      <h2 className="section-heading mt-2 mb-8 col-span-12">
        Keynotes and workshops <br /> that transform, energize, <br />  and empower.
      </h2>
      <div className="col-span-12 md:col-span-6 md:col-start-1">
      <p className='mb-8'>
        Erin&apos;s executive leadership programs are the perfect blend of strategic excellence and authentic transformation. Each presentation is powered by extensive corporate experience and proven methodologies for sustainable high performance.
      </p>
      <p>
      Her objective is simple: help you elevate your leadership by building environments where both results and relationships flourish, using practical frameworks that drive measurable business outcomes while fostering genuine organizational evolution.
      </p>
      </div>
      <div className="col-span-12 md:col-span-6 md:col-start-7">
        <ul className="list-none p-0 m-0 space-y-0 max-w-2xl mx-auto text-gray-700">
            <li>
  <a href="/keynotes#keynote-1" className="home-page-keynotes text-base leading-6 md:text-lg md:leading-7">
    From Awareness to Action: How to Be an Ally in a Polarized World
    <Image src="/images/arrow_right_blue.svg" alt="" width={20} height={20} className="w-5 h-5" />
  </a>
</li>
            <li>
  <a href="/keynotes#keynote-2" className="home-page-keynotes text-base leading-6 md:text-lg md:leading-7">
    From Burnout to Belonging: Tapping Into Your Power for Good
    <Image src="/images/arrow_right_blue.svg" alt="" width={20} height={20} className="w-5 h-5" />
  </a>
</li>
            <li>
  <a href="/keynotes#keynote-3" className="home-page-keynotes text-base leading-6 md:text-lg md:leading-7">
    From Grip to Great: Letting Go to Find Your Flow
    <Image src="/images/arrow_right_blue.svg" alt="" width={20} height={20} className="w-5 h-5" />
  </a>
</li>
            <li>
  <a href="/keynotes#keynote-4" className="home-page-keynotes text-base leading-6 md:text-lg md:leading-7 mt-[0]">
    Sovereign Service: Rethinking the Idea of &apos;Service Above Self&apos;
    <Image src="/images/arrow_right_blue.svg" alt="" width={20} height={20} className="w-5 h-5" />
  </a>
</li>
        </ul>
      </div>
    </section>

      {/* ───────────── TESTIMONIAL ───────────── */}
 </div>
  );
}
