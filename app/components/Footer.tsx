import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-6 py-8 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Leonty Consulting. All rights reserved.</p>
        <p className="mt-1">
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link> | <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
}
