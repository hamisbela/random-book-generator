const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes';

export async function getRandomBook() {
  // List of random search terms to get diverse books
  const searchTerms = ['love', 'mystery', 'science', 'history', 'fantasy', 'adventure'];
  const randomTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];
  
  // Random starting index to get different books each time
  const startIndex = Math.floor(Math.random() * 40);
  
  const response = await fetch(
    `${GOOGLE_BOOKS_API}?q=${randomTerm}&startIndex=${startIndex}&maxResults=1`
  );
  const data = await response.json();
  return data.items?.[0];
}