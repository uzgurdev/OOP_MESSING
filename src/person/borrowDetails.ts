import { get } from "lodash";
import type { Book } from "../books";

interface State {
  isbn: string;
  dates: { start: Date; end?: Date; returnDate?: Date };
  type: "online" | "offline";
  price: number;
}

interface Details extends Omit<State, "dates" | "price"> {
  start: Date;
  returnDate: Date;
  book: Book;
}

export default class BorrowDetails {
  state: State = {} as State;

  constructor(details: Details) {
    this.state = {
      ...details,
      price: details.book.getPrice(details.type),
      dates: {
        start: get(details, "start"),
        returnDate: get(details, "returnDate"), // I added this cause later on we'll add rankings(bronze, silver, gold and so on...)
      },
    };
  }
}
