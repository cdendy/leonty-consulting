import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface KeynoteCardProps {
  title: string;
  tagline: string;
  imageSrc: string | StaticImageData; // Allow StaticImageData for local imports
  href: string;
}

export default function KeynoteCard({ title, tagline, imageSrc, href }: KeynoteCardProps) {
  return (
    <Link href={href} className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 h-full flex flex-col">
      <div className="relative h-40 w-full sm:h-56">
        <Image
          src={imageSrc}
          alt={`Visual for ${title} keynote`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 sm:p-6 bg-white flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-4 flex-grow">{tagline}</p>
        <div className="mt-auto">
          <span className="inline-block text-blue-600 font-medium group-hover:text-blue-800 transition-colors duration-300 text-sm sm:text-base">
            View Details <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
