// app/components/TestimonialCarousel.tsx
'use client';

export default function TestimonialCarousel() {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-16 bg-[#FFF7EE]">
      <div className="max-w-[1280px] mx-auto">
        {/* Radio inputs for slide control */}
        <input type="radio" name="carousel" id="slide1" className="sr-only peer/slide1" defaultChecked />
        <input type="radio" name="carousel" id="slide2" className="sr-only peer/slide2" />
        <input type="radio" name="carousel" id="slide3" className="sr-only peer/slide3" />

        {/* Slides container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex transition-transform duration-500 [--slide-index:0] peer-checked/slide2:[--slide-index:1] peer-checked/slide3:[--slide-index:2]"
               style={{ transform: 'translateX(calc(var(--slide-index) * -100%))' }}>
            <blockquote className="w-full shrink-0 px-4">
              <p className="text-[20px] leading-[32px] tracking-[-0.8px] text-[#181D27] font-[PolySans-Neutral]">
                Erin&apos;s insights transformed our leadership culture. Her approach is equal parts heart and strategy.
              </p>
              <footer className="mt-4 text-[16px] text-[#0073E5] uppercase tracking-[0.4px]">
                — Alex R., HR Director
              </footer>
            </blockquote>
            <blockquote className="w-full shrink-0 px-4">
              <p className="text-[20px] leading-[32px] tracking-[-0.8px] text-[#181D27] font-[PolySans-Neutral]">
                A compelling speaker who made every attendee feel seen. Months later, people are still quoting her.
              </p>
              <footer className="mt-4 text-[16px] text-[#0073E5] uppercase tracking-[0.4px]">
                — Jamie L., Conference Organizer
              </footer>
            </blockquote>
            <blockquote className="w-full shrink-0 px-4">
              <p className="text-[20px] leading-[32px] tracking-[-0.8px] text-[#181D27] font-[PolySans-Neutral]">
                Working with Erin was a turning point. Her keynote was the spark our culture needed.
              </p>
              <footer className="mt-4 text-[16px] text-[#0073E5] uppercase tracking-[0.4px]">
                — Morgan S., VP Operations
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-6 gap-3 sm:mt-8 sm:gap-4">
          <label htmlFor="slide1" className="w-3 h-3 rounded-full bg-[#D5D7DA] peer-checked/slide1:bg-[#0073E5] cursor-pointer"></label>
          <label htmlFor="slide2" className="w-3 h-3 rounded-full bg-[#D5D7DA] peer-checked/slide2:bg-[#0073E5] cursor-pointer"></label>
          <label htmlFor="slide3" className="w-3 h-3 rounded-full bg-[#D5D7DA] peer-checked/slide3:bg-[#0073E5] cursor-pointer"></label>
        </div>
      </div>
    </section>
  );
}
