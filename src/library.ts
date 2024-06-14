import type Book from "./books/book";
import { get } from "lodash";
import type { BookType } from "./books/types";
import { Collection, type Db } from "mongodb";
import type Person from "./person/person";
import { db } from "./db";

class Library {
  private db!: Db;
  private booksCollection!: Collection<Book>;
  private usersCollection!: Collection<Person>;

  constructor() {
    // this.db = "";
    // this.booksCollection = "";
    // this.usersCollection = "";
    // db.connectToDb()
    //   .then(() => {
    //   })
    //   .catch((err) => console.log("Failed to connect to MongoDB: ", err));
  }

  async initialize(): Promise<void> {
    await db.connectToDb();
    this.db = db.getDB();
    this.booksCollection = this.db.collection("books");
    this.usersCollection = this.db.collection("users");
  }

  async addBook(book: Book): Promise<void> {
    if (typeof this.booksCollection !== "string")
      await this.booksCollection.insertOne(book);
    else console.log("books collection is type string");
  }

  async addUser(user: Person): Promise<void> {
    await this.usersCollection.insertOne(user);
  }

  async listAllBooks(): Promise<void> {
    const books = await this.booksCollection.find({}).toArray();
    books.forEach((book) => console.log(book));
  }
}

// class Library {
//   private db: Db;
//   private bookCollection: Collection<Book>;
//   private personCollection: Collection<Person>;
//   private books: Book[] = [];

//   addBook(book: Book): void {
//     this.books.push(book);
//   }

//   removeBook(isbn: string): void {
//     this.books = this.books.filter((book) => book.state.isbn !== isbn);
//   }

//   findBookByTitle(title: string): string | undefined | BookType {
//     const book = this.books.find((book) => book.state.title === title);
//     return (
//       {
//         title: get(book, "title", "[Book Title]"),
//         author: get(book, "author", "[Book Author]"),
//         isbn: get(book, "isbn", "[Book Isbn]"),
//         genres: get(book, "genres", [
//           "Book not Found",
//           "with",
//           `title [${title}]`,
//         ]),
//         price: get(book, "price", {
//           online: 0,
//           offline: 0,
//         }),
//       } || undefined
//     );
//   }

//   findBookByGenre(genre: string): string | BookType {
//     const book = this.books.find((book) => book.state.genres.includes(genre));
//     return (
//       {
//         title: get(book, "title", "[Book Title]"),
//         author: get(book, "author", "[Book Author]"),
//         isbn: get(book, "isbn", "[Book Isbn]"),
//         genres: get(book, "genres", [
//           "Book not Found",
//           "with",
//           `genre [${genre}]`,
//         ]),
//         price: get(book, "price", {
//           online: 0,
//           offline: 0,
//         }),
//       } || undefined
//     );
//   }

//   findBooksByGenre(genre: string): string | BookType[] {
//     const books: BookType[] = [];

//     this.books.forEach((book) => {
//       if (book.state.genres.includes(genre)) {
//         books.push({
//           title: get(book, "title", "[Book Title]"),
//           author: get(book, "author", "[Book Author]"),
//           isbn: get(book, "isbn", "[Book Isbn]"),
//           genres: get(book, "genres", [
//             "Book not Found",
//             "with",
//             `genre [${genre}]`,
//           ]),
//           price: get(book, "price", {
//             online: 0,
//             offline: 0,
//           }),
//         });
//       }
//     });

//     if (books.length !== 0) return books;
//     return `No books found with genre ${genre}`;
//   }

//   findBookByTitleAndGenre(title: string, genre: string): BookType | string {
//     const book = this.books.find(
//       (book) => book.state.title === title && book.state.genres.includes(genre)
//     );

//     if (book !== undefined) {
//       return {
//         title: get(book, "title", "[Book Title]"),
//         author: get(book, "author", "[Book Author]"),
//         isbn: get(book, "isbn", "[Book Isbn]"),
//         genres: get(book, "genres", [
//           "Book not Found",
//           "with",
//           `title [${title}]`,
//           "and",
//           `genre [${genre}]`,
//         ]),
//         price: get(book, "price", {
//           online: 0,
//           offline: 0,
//         }),
//       };
//     }

//     return `Book ${title} with Genre ${genre} is not found!`;
//   }

//   getBookByISBN(isbn: string): BookType {
//     const book = this.books.find((book) => book.state.isbn === isbn);

//     return {
//       title: get(book, "title", "[Book Title]"),
//       author: get(book, "author", "[Book Author]"),
//       isbn: get(book, "isbn", "[Book Isbn]"),
//       genres: get(book, "genres", ["Book not Found", "with", `isbn [${isbn}]`]),
//       price: get(book, "price", {
//         online: 0,
//         offline: 0,
//       }),
//     };
//   }

//   listAllBooks(): void {
//     this.books.forEach((book) => console.log(book.getDetails()));
//   }
// }

export default Library;
