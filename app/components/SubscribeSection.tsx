'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image'; 
import StaggerButton from './StaggerButton'; 

export default function SubscribeSection() {
  return (
    <section className="bg-[#EDE1D1] px-4 py-10 sm:px-6 sm:py-24">
      <div className="max-w-[1280px] mx-auto bg-[#0073E5] rounded-[24px] px-4 py-8 sm:px-16 sm:py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-4 sm:gap-8">
        {/* Left column – headline and subtext */}
        <div>
          <h2 className="text-white text-[22px] leading-[28px] font-bold subscribe_header sm:text-[28px] sm:leading-[36px]">
            Join our community of subscribers
          </h2>
          <p className="text-white text-[16px] leading-[24px] mt-2 sm:text-[18px] sm:leading-[28px]">
            Stay in the loop with everything you need to know.
          </p>
        </div>

        {/* Right column – input, button, and policy */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <form className="flex flex-col w-full gap-3 sm:flex-row sm:gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded-[8px] text-gray-900 text-base focus:outline-none bg-white sm:px-4 sm:py-3 sm:rounded-[10px]"
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
