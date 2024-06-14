import type { BookType } from "./types";

class Book {
  state: BookType = {} as BookType;

  constructor(book: BookType) {
    this.state = book;
  }

  getDetails(): string {
    return `${this.state.title} by ${this.state.author} (ISBN: ${this.state.isbn}), price for online: ${this.state.price.online}, price for offline: ${this.state.price.offline}`;
  }

  getPrice(type: "online" | "offline"): number {
    return this.state.price[type];
  }
}

export default Book;
