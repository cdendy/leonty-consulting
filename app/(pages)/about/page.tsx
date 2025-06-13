"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image'; 
import StaggerButton from '../../components/StaggerButton'; 

export default function HomePage() {
  return (
<div className="space-y-24">
      {/* ───────────────────── HERO ───────────────────── */}
      <section
        className="relative h-[90vh] flex flex-col justify-center text-white px-6 overflow-hidden mt-0 sm:mt-[-127px]"
      >
        <Image
          src="/images/crowd2.webp"
          alt="Erin Leonty keynote speaker background"
          fill
          className="object-cover -z-10"
          priority
        />
        {/* Overlay to darken the image slightly for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
        {/* Content container with relative positioning and higher z-index */}
        <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-12 gap-5 pt-0 sm:pt-[127px]">
          <div className="col-span-12 md:col-span-10 col-start-1 md:col-start-2 flex flex-col items-start">
            <h1 className="home-lede text-white mb-7 leading-[.9]">
            Transforming Leaders Who Transform Organizations
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-white">
            Erin Leonty helps established leaders evolve their influence without sacrificing the operational excellence that built their success. From traditional industrial companies to fast-growing tech startups, she creates breakthrough moments that shift how entire organizations think about performance, culture, and competitive advantage.
            </p>
            <div className="mt-8 space-x-4">
            </div>
          </div>
        </div> {/* Closing tag for className="relative z-10" */}
      </section>

      {/* ───────────── ABOUT PREVIEW ───────────── */}
      <section className="fadeSection px-6 mx-auto max-w-340 grid grid-cols-12 gap-5 mb-36">
    
    <div className="col-span-12 md:col-span-10 col-start-1 md:col-start-2 mb-20">
    <p className="section-eyebrow col-start-2">About</p>
      <h2 className="section-heading mt-2 mb-8 col-start-2 col-span-10">
      From Finance Executive to Transformation Leader: The Authentic Path to Sustainable High Performance
      </h2>
      <p className="text-gray-700 text-2xl">
      Erin Leonty transformed her own career trajectory—and then did the same for organizations. Starting in finance as the &quot;only woman in the room,&quot; she learned firsthand how to navigate traditional business environments while staying true to her values. That experience became her foundation for driving inclusion work at companies like Finning International—proving her approach works even in the toughest, most skeptical environments. Later, as VP of Social Purpose at tech company Clio, she achieved what most leaders think is impossible: 31% increase in women&apos;s leadership representation while driving employee engagement up 6x. Her secret? Discovering that authenticity isn&apos;t the opposite of performance—it&apos;s what unlocks it.
      </p>
      <p className="text-gray-700 mt-10 text-l">
      Most change initiatives fail because leaders try to fix culture with strategy alone. Erin addresses the real challenge: helping established leaders evolve their influence without losing the operational excellence that built their success. When she takes the stage, audiences don&apos;t just learn new concepts—they experience breakthrough moments that shift how they see leadership itself.
      </p>
    </div>
  </section>
  <section className="fadeSection px-6 mx-auto max-w-340 grid grid-cols-12 gap-5 mb-36">
    <div className="col-span-12 md:col-span-10 col-start-1 md:col-start-2 mb-10">
      <p className="section-eyebrow">THE DIFFERENCE</p>
      <h2 className="section-heading mt-2 mb-8">
      What Sets Erin Apart
      </h2>
      <h3 className="mt-10 text-[20px] font-bold leading-[28px] text-[#181D27]">
      Lived the Transformation
      </h3>
      <p className="mt-2 text-[18px] leading-[28px] text-[#4B5057]">
      Born in Edmonton, first in her family to earn a university degree, Erin built her expertise by navigating her own evolution from &quot;only woman in the room&quot; in finance to executive leadership in tech. She doesn&apos;t just teach transformation—she&apos;s lived it.
      </p>

      {/* Second item */}
      <h3 className="mt-8 text-[20px] font-bold leading-[28px] text-[#181D27]">
      Proven in Tough Environments
      </h3>
      <p className="mt-2 text-[18px] leading-[28px] text-[#4B5057]">
      While most change experts work with progressive tech companies, Erin proved her approach in traditional industrial settings where skepticism runs high and change is hardest. Her track record includes driving meaningful results in environments others avoid.
      </p>

      {/* Third item */}
      <h3 className="mt-8 text-[20px] font-bold leading-[28px] text-[#181D27]">
      Business-Proven Results
      </h3>
      <p className="mt-2 text-[18px] leading-[28px] text-[#4B5057]">
      Her work drives measurable outcomes: improved retention, accelerated growth, enhanced team performance. Because sustainable change isn&apos;t about inspiration—it&apos;s about giving leaders practical tools that integrate with how businesses actually operate.
      </p>

       {/* Fourth item */}
      <h3 className="mt-8 text-[20px] font-bold leading-[28px] text-[#181D27]">
      Bridge-Builder by Nature
      </h3>
      <p className="mt-2 text-[18px] leading-[28px] text-[#4B5057]">
      Whether connecting traditional industries with modern workplace expectations or helping tech companies scale without losing their culture, Erin helps organizations navigate complexity while preserving what makes them successful.
      </p>
      {/* Fifth item */}
      <h3 className="mt-8 text-[20px] font-bold leading-[28px] text-[#181D27]">
      Western Canadian Perspective
      </h3>
      <p className="mt-2 text-[18px] leading-[28px] text-[#4B5057]">
      Based in Edmonton with deep roots in Western Canadian business culture, Erin understands the unique dynamics of regional leadership—from family-owned industrial companies to fast-growing tech startups—and how to drive change that fits the local context.
      </p>
    </div>
  </section>
  <section className="fadeSection px-6 mx-auto max-w-340 grid grid-cols-12 gap-5 mb-36">
    <div className="col-span-12 md:col-span-10 col-start-1 md:col-start-2 mb-10">
      <p className="section-eyebrow">THE REASON</p>
      <h2 className="section-heading mt-2 mb-8">
      Why Choose Erin
      </h2>
      <h3 className="mt-10 text-[20px] font-bold leading-[28px] text-[#181D27]">
      Engaging Presentations That Drive Action: 
      </h3>
      <p className="mt-2 text-[18px] leading-[28px] text-[#4B5057]">
      Erin&apos;s keynotes balance inspiration with implementation. Audiences leave with specific tools they can use immediately, not just motivation that fades by Tuesday. Her interactive style keeps energy high while ensuring key messages stick—event organizers consistently report strong participant engagement scores and positive feedback.
      </p>

      {/* Second item */}
      <h3 className="mt-8 text-[20px] font-bold leading-[28px] text-[#181D27]">
      Seamless Event Partnership
      </h3>
      <p className="mt-2 text-[18px] leading-[28px] text-[#4B5057]">
    From initial consultation to post-event follow-up, Erin makes the planning process easy. She arrives early, adapts to last-minute changes with grace, and works collaboratively with your team to ensure her message aligns perfectly with your event goals. Meeting planners appreciate her professionalism and flexibility.
      </p>

      {/* Fifth item */}
      <h3 className="mt-8 text-[20px] font-bold leading-[28px] text-[#181D27]">
      Proven Speaking Excellence:
      </h3>
      <p className="mt-2 text-[18px] leading-[28px] text-[#4B5057]">
      With a track record of successful keynotes across industries—from intimate executive retreats to large conference stages—Erin delivers consistent quality regardless of format or audience size. Her presentations work equally well for in-person, virtual, or hybrid events, with full technical support and backup plans included.
      </p>
    </div>
  </section>
 </div>
  );
}
