import { get } from "lodash";
import type { Book } from "../books";
import BorrowDetails from "./borrowDetails";

interface State {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  balance: number;
  booksBorrowed: BorrowDetails[];
}

interface BorrowBook {
  book: Book;
  type: "online" | "offline";
  returnDate: Date;
}

export default class Person {
  state: State = {} as State;

  constructor(details: Omit<State, "booksBorrowed">) {
    this.state = {
      ...details,
      booksBorrowed: [],
    };
  }

  borrowBook(details: BorrowBook): void {
    const borrowedBook = new BorrowDetails({
      isbn: get(details, "book.isbn", ""),
      book: get(details, "book"),
      type: get(details, "type"),
      start: new Date(),
      returnDate: get(details, "returnDate"),
    });
    this.state.booksBorrowed.push(borrowedBook);
  }

  returnBook(isbn: string): void {
    const book = this.state.booksBorrowed.find(
      (book) => book.state.isbn === isbn
    );
    if (book !== undefined) book.state.dates.end = new Date();
  }
}
