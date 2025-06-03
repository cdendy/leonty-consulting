'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image'; 
import StaggerButton from './StaggerButton'; 

export default function SubscribeSection() {
  return (
    <section className="bg-[#EDE1D1] px-6 py-24">
      <div className="max-w-[1280px] mx-auto bg-[#0073E5] rounded-[24px] px-16 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left column – headline and subtext */}
        <div>
          <h2 className="text-white text-[28px] leading-[36px] font-bold subscribe_header">
            Join 2,000+ subscribers
          </h2>
          <p className="text-white text-[18px] leading-[28px] mt-2">
            Stay in the loop with everything you need to know.
          </p>
        </div>

        {/* Right column – input, button, and policy */}
        <div className="flex flex-col gap-4">
          <form className="flex w-full gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-[10px] text-gray-900 text-base focus:outline-none bg-white"
            />
            {/* <button
              type="submit"
              className="btn-skeuo"
            >
              Subscribe
            </button> */}
            
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
            type="submit"
            >
             Subscribe
            </StaggerButton>

          </form>
          <p className="text-white text-sm">
            We care about your data in our{' '}
            <a href="/privacy" className="underline">
              privacy policy.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
