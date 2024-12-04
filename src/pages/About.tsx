export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
          <div className="prose prose-indigo max-w-none">
            <p>
              RandomBookGenerator.com was created by book lovers for book lovers. Our mission is to help readers discover new books and expand their literary horizons through the power of randomness.
            </p>
            <p>
              We believe that some of the best reading experiences come from unexpected discoveries. Our platform uses advanced algorithms and the extensive Google Books database to suggest random books across all genres, helping readers break out of their comfort zones and find hidden gems they might never have discovered otherwise.
            </p>
            <h2>Our Mission</h2>
            <p>
              To make book discovery fun, surprising, and accessible to everyone. We want to help readers:
            </p>
            <ul>
              <li>Break out of reading ruts</li>
              <li>Discover new authors and genres</li>
              <li>Challenge their reading preferences</li>
              <li>Find unexpected literary treasures</li>
            </ul>
            <h2>How It Works</h2>
            <p>
              Our random book generator uses the Google Books API to access millions of books. When you click the generate button, our algorithm:
            </p>
            <ol>
              <li>Randomly selects from various genres and categories</li>
              <li>Ensures quality results by filtering for available information</li>
              <li>Presents you with a detailed book recommendation</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}