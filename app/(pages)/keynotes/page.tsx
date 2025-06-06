"use client";
import { useEffect, useRef } from 'react';
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image'; 
import StaggerButton from '../../components/StaggerButton'; 
import WatchErin from '../../components/WatchErin';
export default function HomePage() {
  return (
<div className="space-y-24">

    <main className="px-6 mx-auto max-w-[1360px] grid grid-cols-12 gap-5 mt-18 mb-36">
      <div className="col-span-10 col-start-2 mb-10">
        {/* 
          → Because we did NOT pass a `height` prop, 
            useAspectRatio={true} is in effect by default, 
            so it will force a 16:9 box. 
        */}
        <WatchErin videoUrl="https://www.youtube.com/watch?v=NFsFgerTO6E" />
      </div>
    </main>
  <section className="fadeSection px-6 mx-auto max-w-340 grid grid-cols-12 gap-5 mb-36">
    <div className="col-span-10 col-start-2 mb-10">
      <p className="section-eyebrow">Keynote Speaking</p>
      <h2 className="section-heading mt-2 mb-8">
      Leadership Transformation That Sticks
      </h2>
<p>The best keynotes don&apos;t just inspire—they shift how leaders think about what&apos;s possible. Erin&apos;s presentations create breakthrough moments where established leaders discover they don&apos;t have to choose between driving results and fostering authentic connection. Her audiences leave with practical frameworks they implement immediately, turning insight into measurable organizational change.</p>

<p>Whether you&apos;re leading an annual leadership retreat, hosting a conference on the future of work, or bringing teams together for strategic planning, Erin delivers content that bridges the gap between aspiration and action. Her approach honors what&apos;s working in your organization while evolving what needs to change—creating sustainable transformation that builds on your existing strengths.</p>

<p>From intimate executive sessions to large conference stages, Erin&apos;s keynotes generate the kind of engaged dialogue that continues long after the presentation ends. Because real leadership transformation happens when people feel safe to explore new possibilities while maintaining confidence in their proven capabilities.</p>

    </div>
  </section>
  <section className="keynote-item px-6 mx-auto max-w-[1360px] grid grid-cols-12 gap-5 mb-36">
      {/* 
        On small screens: col-span-12 (full width)
        On md+ screens: col-span-8 (i.e. 8/12 of 1360px)
      */}
      <div className="col-span-12 md:col-span-7 md:col-start-5 relative text-left mb-20">
        {/* 01 indicator */}
        <span>01</span>

        {/* Headline */}
        <h3>From Awareness to Action: How to Be an Ally in a Polarized World</h3>

        {/* Illustration (negative margins on md+) */}
        {/* <div className="relative mt-4 mb-6 md:absolute md:top-0 md:right-0 md:w-1/2 lg:w-2/5">
          <Image
            src="/images/lion-illustration.png"
            alt="Lion illustration"
            width={400}
            height={400}
            className="md:-mr-12"
          />
        </div> */}

        {/* First paragraph */}
        <p>
          In today&apos;s increasingly divided landscape, organizations are struggling to navigate complex social issues while maintaining cohesive cultures. As polarization intensifies in workplaces, the ability to build bridges across differences has become a critical leadership competency. In this thought-provoking, actionable, and HIGHLY customized presentation, Erin reveals how effective allyship isn&apos;t just about good intentions—it&apos;s about creating measurable business impact through authentic inclusion.
        </p>

        {/* Second paragraph */}
        <p>
          Backed by real-world transformation examples and delivered with warm authenticity, this keynote explores how successful organizations are developing cultures where diverse perspectives drive innovation and results.
        </p>

        {/* Bulleted list */}
        <ul>
          <li>How polarization in the workplace directly impacts talent retention, engagement, and performance</li>
          <li>Why traditional diversity approaches often fail to create sustainable change</li>
          <li>The critical balance between speaking up and creating space for different voices</li>
          <li>Actionable strategies for moving beyond awareness to meaningful action that transforms culture</li>
        </ul>

        {/* Highlighted italic note */}
        <p className="note">
          All attendees receive Erin&apos;s proven framework (developed through work with numerous major organizations) with specific, implementable tactics that can be applied immediately to build bridges in even the most challenging environments.
        </p>

        {/* Bottom divider */}
        <div className="divider" />
      </div>
      <div className="col-span-12 md:col-span-7 md:col-start-5 relative text-right">
        {/* 01 indicator */}
        <span>01</span>

        {/* Headline */}
        <h3>From Awareness to Action: How to Be an Ally in a Polarized World</h3>

        {/* Illustration (negative margins on md+) */}
        {/* <div className="relative mt-4 mb-6 md:absolute md:top-0 md:right-0 md:w-1/2 lg:w-2/5">
          <Image
            src="/images/lion-illustration.png"
            alt="Lion illustration"
            width={400}
            height={400}
            className="md:-mr-12"
          />
        </div> */}

        {/* First paragraph */}
        <p>
          In today&apos;s increasingly divided landscape, organizations are struggling to navigate complex social issues while maintaining cohesive cultures. As polarization intensifies in workplaces, the ability to build bridges across differences has become a critical leadership competency. In this thought-provoking, actionable, and HIGHLY customized presentation, Erin reveals how effective allyship isn&apos;t just about good intentions—it&apos;s about creating measurable business impact through authentic inclusion.
        </p>

        {/* Second paragraph */}
        <p>
          Backed by real-world transformation examples and delivered with warm authenticity, this keynote explores how successful organizations are developing cultures where diverse perspectives drive innovation and results.
        </p>

        {/* Bulleted list */}
        <ul>
          <li>How polarization in the workplace directly impacts talent retention, engagement, and performance</li>
          <li>Why traditional diversity approaches often fail to create sustainable change</li>
          <li>The critical balance between speaking up and creating space for different voices</li>
          <li>Actionable strategies for moving beyond awareness to meaningful action that transforms culture</li>
        </ul>

        {/* Highlighted italic note */}
        <p className="note">
          All attendees receive Erin&apos;s proven framework (developed through work with numerous major organizations) with specific, implementable tactics that can be applied immediately to build bridges in even the most challenging environments.
        </p>

        {/* Bottom divider */}
        <div className="divider" />
      </div>
      <div className="col-span-12 md:col-span-7 md:col-start-5 relative text-left mb-20">
        {/* 01 indicator */}
        <span>01</span>

        {/* Headline */}
        <h3>From Awareness to Action: How to Be an Ally in a Polarized World</h3>

        {/* Illustration (negative margins on md+) */}
        {/* <div className="relative mt-4 mb-6 md:absolute md:top-0 md:right-0 md:w-1/2 lg:w-2/5">
          <Image
            src="/images/lion-illustration.png"
            alt="Lion illustration"
            width={400}
            height={400}
            className="md:-mr-12"
          />
        </div> */}

        {/* First paragraph */}
        <p>
          In today&apos;s increasingly divided landscape, organizations are struggling to navigate complex social issues while maintaining cohesive cultures. As polarization intensifies in workplaces, the ability to build bridges across differences has become a critical leadership competency. In this thought-provoking, actionable, and HIGHLY customized presentation, Erin reveals how effective allyship isn&apos;t just about good intentions—it&apos;s about creating measurable business impact through authentic inclusion.
        </p>

        {/* Second paragraph */}
        <p>
          Backed by real-world transformation examples and delivered with warm authenticity, this keynote explores how successful organizations are developing cultures where diverse perspectives drive innovation and results.
        </p>

        {/* Bulleted list */}
        <ul>
          <li>How polarization in the workplace directly impacts talent retention, engagement, and performance</li>
          <li>Why traditional diversity approaches often fail to create sustainable change</li>
          <li>The critical balance between speaking up and creating space for different voices</li>
          <li>Actionable strategies for moving beyond awareness to meaningful action that transforms culture</li>
        </ul>

        {/* Highlighted italic note */}
        <p className="note">
          All attendees receive Erin&apos;s proven framework (developed through work with numerous major organizations) with specific, implementable tactics that can be applied immediately to build bridges in even the most challenging environments.
        </p>

        {/* Bottom divider */}
        <div className="divider" />
      </div>
      <div className="col-span-12 md:col-span-7 md:col-start-5 relative text-right">
        {/* 01 indicator */}
        <span>01</span>

        {/* Headline */}
        <h3>From Awareness to Action: How to Be an Ally in a Polarized World</h3>

        {/* Illustration (negative margins on md+) */}
        {/* <div className="relative mt-4 mb-6 md:absolute md:top-0 md:right-0 md:w-1/2 lg:w-2/5">
          <Image
            src="/images/lion-illustration.png"
            alt="Lion illustration"
            width={400}
            height={400}
            className="md:-mr-12"
          />
        </div> */}

        {/* First paragraph */}
        <p>
          In today&apos;s increasingly divided landscape, organizations are struggling to navigate complex social issues while maintaining cohesive cultures. As polarization intensifies in workplaces, the ability to build bridges across differences has become a critical leadership competency. In this thought-provoking, actionable, and HIGHLY customized presentation, Erin reveals how effective allyship isn&apos;t just about good intentions—it&apos;s about creating measurable business impact through authentic inclusion.
        </p>

        {/* Second paragraph */}
        <p>
          Backed by real-world transformation examples and delivered with warm authenticity, this keynote explores how successful organizations are developing cultures where diverse perspectives drive innovation and results.
        </p>

        {/* Bulleted list */}
        <ul>
          <li>How polarization in the workplace directly impacts talent retention, engagement, and performance</li>
          <li>Why traditional diversity approaches often fail to create sustainable change</li>
          <li>The critical balance between speaking up and creating space for different voices</li>
          <li>Actionable strategies for moving beyond awareness to meaningful action that transforms culture</li>
        </ul>

        {/* Highlighted italic note */}
        <p className="note">
          All attendees receive Erin&apos;s proven framework (developed through work with numerous major organizations) with specific, implementable tactics that can be applied immediately to build bridges in even the most challenging environments.
        </p>

        {/* Bottom divider */}
        <div className="divider" />
      </div>
    </section>
 </div>
  );
}
