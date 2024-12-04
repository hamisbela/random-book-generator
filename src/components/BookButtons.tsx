import { ShoppingCart, Headphones } from 'lucide-react';
import { getAmazonLink, getAudibleLink } from '../utils/bookLinks';

interface BookButtonsProps {
  title: string;
  authors?: string[];
}

export default function BookButtons({ title, authors }: BookButtonsProps) {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      <a
        href={getAmazonLink(title, authors)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
      >
        <ShoppingCart className="h-5 w-5 mr-2" />
        Buy on Amazon
      </a>
      <a
        href={getAudibleLink(title, authors)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
      >
        <Headphones className="h-5 w-5 mr-2" />
        Listen on Audible
      </a>
    </div>
  );
}