"use client";
import { useEffect, useRef } from 'react';
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image'; 
import StaggerButton from '../../components/StaggerButton'; 
import WatchErin from '../../components/WatchErin';
export default function HomePage() {
  return (
<div className="space-y-24">

    <main className="px-6 mx-auto max-w-[1360px] grid grid-cols-12 gap-5 mt-18 mb-25">
      <div className="col-span-10 col-start-2 mb-10">
        {/* 
          → Because we did NOT pass a `height` prop, 
            useAspectRatio={true} is in effect by default, 
            so it will force a 16:9 box. 
        */}
        <WatchErin videoUrl="https://www.youtube.com/watch?v=NFsFgerTO6E" />
      </div>
    </main>
  <section className="fadeSection px-6 mx-auto max-w-340 grid grid-cols-12 gap-5 mb-25">
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
    {/* Keynote 1 */}
    <a id="keynote-1" />
    <div className="col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch md:min-h-[420px] mb-20">
        {/* Text content on left (desktop), above (mobile) */}
        <div className="col-span-12 md:col-span-7 md:col-start-2 relative text-left">
          {/* 01 indicator */}
          <span>01</span>

          {/* Headline */}
          <h3>From Awareness to Action: How to Be an Ally in a Polarized World</h3>

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
        {/* Image on right (desktop), below (mobile) */}
        <div className="col-span-12 md:col-span-4 md:col-start-9 flex items-center justify-center mt-6 md:mt-0 md:h-full">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="Keynote placeholder"
            className="w-full max-h-[300px] md:h-full md:max-h-none object-cover rounded-lg"
          />
        </div>
      </div>
      {/* Keynote 2 - image in */}
<a id="keynote-2" />
      <div className="col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch md:min-h-[420px] mb-20">
        {/* Image on left (desktop), above (mobile) */}
        <div className="col-span-12 md:col-span-4 flex items-center justify-center mb-6 md:mb-0 md:h-full">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="Keynote placeholder"
            className="w-full max-h-[300px] md:h-full md:max-h-none object-cover rounded-lg"
          />
        </div>
        {/* Text content on right (desktop), below (mobile) */}
        <div className="col-span-12 md:col-span-7 md:col-start-5 relative text-right">
          {/* 01 indicator */}
          <span>02</span>

          {/* Headline */}
          <h3>From Burnout to Belonging: Tapping Into Your Power for Good</h3>

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
      </div>
      {/* Keynote 3 */}
<a id="keynote-3" />
      <div className="col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch md:min-h-[420px] mb-20">
        {/* Text content on left (desktop), above (mobile) */}
        <div className="col-span-12 md:col-span-7 md:col-start-2 relative text-left">
          {/* 01 indicator */}
          <span>03</span>

          {/* Headline */}
          <h3>From Grip to Great: Letting Go to Find Your Flow</h3>

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
        {/* Image on right (desktop), below (mobile) */}
        <div className="col-span-12 md:col-span-4 md:col-start-9 flex items-center justify-center mt-6 md:mt-0 md:h-full">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="Keynote placeholder"
            className="w-full max-h-[300px] md:h-full md:max-h-none object-cover rounded-lg"
          />
        </div>
      </div>
      {/* Keynote 4 - image in*/}
<a id="keynote-4" />
      <div className="col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch md:min-h-[420px] mb-20">
        {/* Image on left (desktop), above (mobile) */}
        <div className="col-span-12 md:col-span-4 flex items-center justify-center mb-6 md:mb-0 md:h-full">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="Keynote placeholder"
            className="w-full max-h-[300px] md:h-full md:max-h-none object-cover rounded-lg"
          />
        </div>
        {/* Text content on right (desktop), below (mobile) */}
        <div className="col-span-12 md:col-span-7 md:col-start-5 relative text-right">
          {/* 01 indicator */}
          <span>04</span>

          {/* Headline */}
          <h3>Sovereign Service: Rethinking the Idea of 'Service Above Self'</h3>

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
      </div>
    </section>
 </div>
  );
}
