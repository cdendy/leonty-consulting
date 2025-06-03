// import KeynoteCard from '../../components/KeynoteCard'; // Adjusted path - Commented out as not used
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Keynotes by Erin Leonty | Leonty Consulting',
  description: 'Explore impactful keynotes on leadership, resilience, and future-proofing teams by Erin Leonty.',
};

// Sample data for topics - replace with actual data
const topics = [
  {
    title: "From Awareness to Action: How to Be an Ally in a Polarized World",
    blurb: "This keynote explores practical strategies for effective allyship, moving beyond performative gestures to create real, sustainable change in diverse environments."
  },
  {
    title: "From Burnout to Belonging: Tapping Into Your Power for Good",
    blurb: "Discover how to foster a culture of belonging that combats burnout, empowers individuals, and unlocks collective potential for organizational success."
  },
  {
    title: "From Grip to Great: Letting Go to Find Your Flow",
    blurb: "Learn techniques to release rigid thinking and embrace adaptability, enabling leaders and teams to find their flow and achieve peak performance."
  },
  {
    title: "Sovereign Service: Rethinking the Idea of “Service Above Self”",
    blurb: "A transformative look at service leadership, emphasizing self-care and boundaries as crucial components for sustainable and impactful service."
  }
];

export default function KeynotesPage() {
  return (
    <div className="container mx-auto px-6 py-16 space-y-20">
    {/* ───────────── INTRO ───────────── */}
    <section className="fadeSection text-center max-w-3xl mx-auto">
      <h1 className="mb-4 home-lede">Creating Lasting Change Through Authentic Leadership</h1>
      <p className="text-gray-700">
        Erin’s presentations go beyond inspiration — they catalyze measurable shifts in how leaders show up, how teams
        collaborate, and how organizations thrive.
      </p>
    </section>

    {/* ───────────── WHY BOOK ───────────── */}
    <section className="fadeSection bg-gray-50 p-8 rounded-lg space-y-2 max-w-4xl mx-auto">
      {[
        'Proven Impact • measurable organizational improvements',
        'Authentic Leadership Expertise',
        'Engaging Story-driven Delivery',
        'Flexible Formats (30-90 min, workshops, virtual)',
        'Regional Insight • Western Canada focus',
        'DEI Authority with proven frameworks',
      ].map((line) => (
        <div key={line} className="text-gray-700">— {line}</div>
      ))}
    </section>

    {/* ───────────── TOPICS ───────────── */}
    <section className="space-y-20">
      {topics.map((t, i) => (
        <section key={i} className="fadeSection flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold">{t.title}</h2>
            <p className="text-gray-700">{t.blurb}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li className="font-semibold">Key Takeaways include:</li>
              <li>Placeholder takeaway 1</li>
              <li>Placeholder takeaway 2</li>
              <li>Placeholder takeaway 3</li>
            </ul>
            <p className="italic text-gray-600">Typical format: 45-75 min + Q&A</p>
          </div>
          <div className="md:w-1/2 h-64 bg-gray-200 rounded">
            <img src="https://picsum.photos/600/400" alt={t.title} className="w-full h-full object-cover rounded" />
          </div>
        </section>
      ))}
    </section>

    {/* ───────────── CTA ───────────── */}
    <section className="fadeSection text-center py-12 bg-gray-100 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">Interested in Booking One of These Keynotes?</h3>
      <Link href="/contact" className="inline-block underline">
        Contact Us to Reserve Your Date
      </Link>
    </section>
  </div>
  );
}

