export function getAmazonLink(title: string, authors?: string[]): string {
  const searchQuery = encodeURIComponent(`${title} ${authors?.[0] || ''}`);
  return `https://www.amazon.com/s?k=${searchQuery}&i=stripbooks`;
}

export function getAudibleLink(title: string, authors?: string[]): string {
  const searchQuery = encodeURIComponent(`${title} ${authors?.[0] || ''}`);
  return `https://www.audible.com/search?keywords=${searchQuery}`;
}