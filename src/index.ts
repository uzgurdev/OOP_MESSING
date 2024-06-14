import express from "express";
import { Book } from "./books";
import Library from "./library";
import Person from "./person/person";

const books = [
  {
    title: "1984",
    author: "George Orwell",
    isbn: "1223445465",
    genres: ["politic"],
    price: {
      online: 5,
      offline: 10,
    },
  },
  {
    title: "Whispers of the Forgotten",
    author: "Alice M. Harper",
    isbn: "978-1-234567-01-2",
    genres: ["Mystery", "Thriller"],
    price: {
      online: 2,
      offline: 10,
    },
  },
  {
    title: "Echoes of the Past",
    author: "Benjamin D. Clarke",
    isbn: "978-1-234567-02-9",
    genres: ["Historical Fiction", "Drama"],
    price: {
      online: 5,
      offline: 15,
    },
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    isbn: "978-1-234567-03-6",
    genres: ["Historical Fiction", "Drama"],
    price: {
      online: 20,
      offline: 30,
    },
  },
  {
    title: "The Silent Voyager",
    author: "Catherine A. Rivera",
    isbn: "978-1-234567-73-6",
    genres: ["Adventure", "Fantasy"],
    price: {
      online: 15,
      offline: 20,
    },
  },
  {
    title: "Tales of the Forgotten",
    author: "Ingrid P. Brown",
    isbn: "978-1-234567-35-7",
    genres: ["Historical Fiction", "Drama"],
    price: {
      online: 10,
      offline: 20,
    },
  },
  {
    title: "The Infinite Odyssey",
    author: "Jack Q. Evans",
    isbn: "978-1-234567-36-4",
    genres: ["Science Fiction", "Adventure"],
    price: {
      online: 32,
      offline: 40,
    },
  },
];

const users = [
  {
    id: "user1",
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "123-456-7890",
    address: "123 Maple St, Springfield, IL",
    balance: 50.75,
    booksBorrowed: [],
  },
  {
    id: "user2",
    firstName: "Jane",
    lastName: "Smith",
    phoneNumber: "234-567-8901",
    address: "456 Oak St, Lincoln, NE",
    balance: 35.5,
    booksBorrowed: [],
  },
  {
    id: "user3",
    firstName: "Michael",
    lastName: "Johnson",
    phoneNumber: "345-678-9012",
    address: "789 Pine St, Madison, WI",
    balance: 25.0,
    booksBorrowed: [],
  },
  {
    id: "user4",
    firstName: "Emily",
    lastName: "Davis",
    phoneNumber: "456-789-0123",
    address: "101 Birch St, Des Moines, IA",
    balance: 10.25,
    booksBorrowed: [],
  },
  {
    id: "user5",
    firstName: "Matthew",
    lastName: "Brown",
    phoneNumber: "567-890-1234",
    address: "202 Cedar St, Omaha, NE",
    balance: 60.0,
    booksBorrowed: [],
  },
  {
    id: "user6",
    firstName: "Sophia",
    lastName: "Wilson",
    phoneNumber: "678-901-2345",
    address: "303 Elm St, Columbus, OH",
    balance: 40.5,
    booksBorrowed: [],
  },
  {
    id: "user7",
    firstName: "James",
    lastName: "Garcia",
    phoneNumber: "789-012-3456",
    address: "404 Fir St, Denver, CO",
    balance: 15.75,
    booksBorrowed: [],
  },
  {
    id: "user8",
    firstName: "Olivia",
    lastName: "Martinez",
    phoneNumber: "890-123-4567",
    address: "505 Ash St, Cheyenne, WY",
    balance: 30.0,
    booksBorrowed: [],
  },
  {
    id: "user9",
    firstName: "Daniel",
    lastName: "Hernandez",
    phoneNumber: "901-234-5678",
    address: "606 Spruce St, Phoenix, AZ",
    balance: 55.0,
    booksBorrowed: [],
  },
  {
    id: "user10",
    firstName: "Emma",
    lastName: "Lopez",
    phoneNumber: "012-345-6789",
    address: "707 Willow St, Salt Lake City, UT",
    balance: 20.0,
    booksBorrowed: [],
  },
];

const app = express();
const library = new Library();

(async () => {
  await library.initialize();

  // Adding new book to library
  app.post("/add-book", async (req, res) => {
    const bookDetails = req.body;
    const book = new Book(bookDetails);
    await library.addBook(book);
    res.status(201).send("Book added successfully! 📚");
  });

  // Adding new user to library 📚
  app.post("/add-user", async (req, res) => {
    const userDetails = req.body;
    const user = new Person(userDetails);
    await library.addUser(user);
    res.status(201).send("Welcome to the library! 📚😊");
  });

  // Get all books from library 📚
  app.get("/books", async (req, res) => {
    const books = await library.listAllBooks();
    res.status(201).send(books);
  });
})();
