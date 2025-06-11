import Image from 'next/image';
import Link from 'next/link';

export default function AboutTeaser() {
  return (
    <section id="about-teaser" className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center py-6 sm:py-12 md:py-20">
      <div className="space-y-4 md:pr-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">About Erin Leonty</h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Erin Leonty is a seasoned executive coach and keynote speaker specializing in leadership, change management, and organizational resilience. With over 15 years of corporate leadership experience, Erin helps leaders navigate uncertainty and drive sustainable growth.
        </p>
        <Link href="/about" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg text-md transition duration-300 transform hover:scale-105">
          Learn More About Erin
        </Link>
      </div>
      <div className="flex justify-center items-center mt-4 sm:mt-8 md:mt-0">
        <div className="w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 relative">
          <Image
            src="/images/erin-headshot.jpg" // Ensure this image exists in public/images
            alt="Erin Leonty, founder of Leonty Consulting"
            fill
            className="rounded-full object-cover shadow-2xl border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
}
