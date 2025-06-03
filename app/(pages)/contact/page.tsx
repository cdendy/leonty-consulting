import ContactForm from '../../components/ContactForm'; // Adjusted path
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Erin Leonty | Leonty Consulting',
  description: 'Reach out to Erin Leonty for keynote speaking engagements, executive coaching, or inquiries.',
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-6 py-16 space-y-20">
      {/* ───────────── PAGE TITLE ───────────── */}
      <section className="fadeSection text-center">
        <h1 className="text-4xl font-bold mb-4">Book Erin Leonty | Contact Leonty Consulting</h1>
        <p className="text-gray-700">
          Ready to Transform Your Next Event? Whether you&apos;re planning a leadership conference in Calgary,
          Erin&apos;s leadership style is focused on helping organizations build cultures where everyone can thrive. across Western Canada,
          Let&apos;s connect and discuss your goals.Erin can create a transformational experience for your audience.
        </p>
      </section>

      {/* ───────────── FORM ───────────── */}
      <section className="fadeSection max-w-lg mx-auto">
        <ContactForm />
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className="fadeSection text-center space-y-4">
        <p className="text-gray-700">
          Ready to Get Started? Transform your next event with authentic leadership insights that create lasting change.
          Whether you&apos;re in Edmonton, Calgary, or anywhere across Western Canada, we&apos;re here to help you create an
          unforgettable experience for your audience.
        </p>
        <p className="text-gray-700">
  Fill out the form above or email us directly at{' '}
  <a href="mailto:speaking@leontyconsulting.com" className="text-blue-600 underline">
    speaking@leontyconsulting.com
  </a>.
  She&apos;s available for keynotes, workshops, and executive consulting.
</p>
      </section>
    </main>
  );
}

