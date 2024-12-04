export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
      thumbnail: string;
    };
    publishedDate?: string;
    publisher?: string;
    industryIdentifiers?: Array<{
      type: string;
      identifier: string;
    }>;
  };
}