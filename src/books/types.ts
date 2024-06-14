interface Price {
  online: number;
  offline: number;
}

interface BookType {
  title: string;
  author: string;
  genres: string[];
  price: Price;
  isbn: string;
}

export type { BookType };
