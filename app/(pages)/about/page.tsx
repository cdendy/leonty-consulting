import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Erin Leonty | Leonty Consulting',
  description: 'Learn about Erin Leonty, her mission, and her expertise in executive coaching and keynote speaking.',
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-6 py-16 space-y-20">
      {/* ───────────── PAGE INTRO ───────────── */}
      <section className="fadeSection">
        <nav className="text-sm text-gray-600 mb-4">
          <Link href="/" className="hover:underline">Home</Link> &gt; <span>About</span>
        </nav>
        <h1 className="text-4xl font-bold mb-2">Creating Cultures Where Everyone Can Thrive</h1>
        <p className="text-xl text-gray-700">Authentic Leadership • Workplace Culture • Diversity & Inclusion</p>
      </section>

      {/* ───────────── MAIN BIO ───────────── */}
      <section className="fadeSection md:grid md:grid-cols-2 md:gap-12 items-start">
        <div className="space-y-4 order-2 md:order-1">
          <p className="text-gray-700">
            Erin Leonty’s work is focused on creating cultures of belonging and empowerment across Western Canada and beyond.
            She helps organizations transform leadership practices through measurable, authentic change.
          </p>
          <p className="text-gray-700">
            Whether she’s on stage or consulting executives, Erin guides leaders to use their influence for good, driving lasting cultural shifts.
          </p>
        </div>
        <div className="order-1 md:order-2 h-64 bg-gray-200 rounded">
          {/* <img src="https://picsum.photos/500/500" alt="Erin Leonty" className="w-full h-full object-cover rounded" /> */}
        </div>
      </section>

      {/* ───────────── APPROACH ───────────── */}
      <section className="fadeSection space-y-4 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold">Truth as the Foundation of Transformation</h2>
        <p className="text-gray-700">
          Truth is empowering. By embracing honesty and authenticity, Erin helps leaders explore diversity and create
          workplaces where everyone can contribute their full talent.
        </p>
      </section>

      {/* ───────────── CREDENTIALS GRID ───────────── */}
      <section className="fadeSection grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          '15+ years leadership-development experience',
          'Certified Executive Coach',
          'Featured speaker at Western Canadian business events',
          'Trusted advisor to Fortune 500 & scale-ups',
          'DEI & authentic-leadership authority',
          'Based in Edmonton • Serves clients globally',
        ].map((item) => (
          <div key={item} className="border p-6 rounded hover:shadow-md transition text-gray-700 text-center">
            {item}
          </div>
        ))}
      </section>

      {/* ───────────── PERSONAL STORY ───────────── */}
      <section className="fadeSection space-y-4 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold">Beyond the Stage</h2>
        <p className="text-gray-700">
          When she’s not delivering keynotes or consulting, you’ll find Erin exploring Edmonton’s arts scene, hiking the
          Canadian Rockies, or mentoring emerging leaders committed to positive change.
        </p>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className="fadeSection text-center py-12 bg-gray-100 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
        <Link href="/speaking" className="inline-block underline mr-4">Explore Speaking Topics</Link>
        <Link href="/contact" className="inline-block underline">Book a Consultation</Link>
      </section>
    </main>
  );
}

