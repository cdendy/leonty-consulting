import SubscribeSection from '@/components/SubscribeSection';
import ContactForm from '../../components/ContactForm'; // Adjusted path
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Erin Leonty | Leonty Consulting',
  description: 'Reach out to Erin Leonty for keynote speaking engagements, executive coaching, or inquiries.',
};

export default function ContactPage() {
  return (
    <div className="space-y-24">
      {/* ───────────── PAGE TITLE ───────────── */}
      <section className="fadeSection px-6 mx-auto max-w-[1280px] grid grid-cols-12 gap-5 mt-18 mb-36">
        <div className="col-span-10 col-start-2">
          <p className="section-eyebrow mb-2">Contact</p>
          <h1 className="section-heading mb-6">Book Erin Leonty | Contact Leonty Consulting</h1>
          <p className="text-gray-700 text-xl md:text-2xl">
            Ready to Transform Your Next Event? Whether you&apos;re planning a leadership conference in Calgary or anywhere across Western Canada, Erin&apos;s leadership style is focused on helping organizations build cultures where everyone can thrive. Let&apos;s connect and discuss your goals—Erin can create a transformational experience for your audience.
          </p>
        </div>
      </section>

      {/* ───────────── FORM ───────────── */}
      <section className="fadeSection px-6 mx-auto max-w-[1280px] grid grid-cols-12 gap-5 mb-36">
        <div className="col-span-10 col-start-2">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

