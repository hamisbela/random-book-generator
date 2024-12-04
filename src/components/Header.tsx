import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-indigo-600 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8" />
            <span className="text-xl font-bold">RandomBookGenerator</span>
          </Link>
          <div className="hidden sm:flex space-x-4">
            <Link to="/" className="hover:text-indigo-200 px-3 py-2">Home</Link>
            <Link to="/about" className="hover:text-indigo-200 px-3 py-2">About</Link>
            <Link to="/contact" className="hover:text-indigo-200 px-3 py-2">Contact</Link>
          </div>
          <button className="sm:hidden">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}