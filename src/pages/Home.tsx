import { useState } from 'react';
import { Book } from '../types/book';
import { getRandomBook } from '../utils/bookApi';
import { BookOpen, RefreshCw } from 'lucide-react';
import BookButtons from '../components/BookButtons';

export default function Home() {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const generateBook = async () => {
    setLoading(true);
    setShowFullDescription(false);
    try {
      const randomBook = await getRandomBook();
      setBook(randomBook);
    } catch (error) {
      console.error('Error fetching book:', error);
    }
    setLoading(false);
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Random Book Generator
          </h1>
          <p className="text-xl text-gray-600">
            Discover your next unexpected reading adventure!
          </p>
          <button
            onClick={generateBook}
            disabled={loading}
            className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loading ? (
              <RefreshCw className="animate-spin h-5 w-5 mr-2" />
            ) : (
              <BookOpen className="h-5 w-5 mr-2" />
            )}
            Generate Random Book
          </button>
        </div>

        {book && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192?text=No+Cover'}
                  alt={book.volumeInfo.title}
                  className="w-32 h-48 object-cover rounded-lg shadow-lg"
                />
                <BookButtons 
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {book.volumeInfo.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  By {book.volumeInfo.authors?.join(', ') || 'Unknown Author'}
                </p>
                <div className="text-gray-700 mb-4">
                  {book.volumeInfo.description && (
                    <>
                      <p className="mb-2">
                        {showFullDescription
                          ? book.volumeInfo.description
                          : `${book.volumeInfo.description.slice(0, 500)}...`}
                      </p>
                      {book.volumeInfo.description.length > 500 && (
                        <button
                          onClick={toggleDescription}
                          className="text-indigo-600 hover:text-indigo-800 font-medium"
                        >
                          {showFullDescription ? 'Show Less' : 'Read More'}
                        </button>
                      )}
                    </>
                  )}
                </div>
                <div className="text-sm text-gray-500">
                  <p>Published: {book.volumeInfo.publishedDate}</p>
                  <p>Publisher: {book.volumeInfo.publisher}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <section className="mt-16 prose prose-indigo max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            About Random Book Generator
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              Welcome to Random Book Generator, your ultimate tool for discovering new and exciting books! Our random book generator helps readers break out of their comfort zones and find unexpected literary treasures.
            </p>
            <p>
              Using the power of the Google Books API, our random book generator provides you with diverse book recommendations across various genres, authors, and time periods. Whether you're looking for your next great read or just curious about what's out there, our tool makes book discovery fun and effortless.
            </p>
            <h3>Why Use Random Book Generator?</h3>
            <ul>
              <li>Discover books you might never find otherwise</li>
              <li>Break out of reading ruts and explore new genres</li>
              <li>Find hidden literary gems</li>
              <li>Expand your reading horizons</li>
              <li>Make reading choices more adventurous</li>
            </ul>
            <h3>Frequently Asked Questions</h3>
            <h4>How does the random book generator work?</h4>
            <p>
              Our random book generator uses a sophisticated algorithm to select books from a vast database. It randomly selects from different genres and categories to ensure diverse recommendations.
            </p>
            <h4>Are the book recommendations truly random?</h4>
            <p>
              Yes! Each time you click the generate button, our system randomly selects from millions of books in the Google Books database.
            </p>
            <h4>Can I find these books to read?</h4>
            <p>
              Absolutely! All books shown are real publications that can be found in bookstores, libraries, or online retailers.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}