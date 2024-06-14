# Library

Future database object:

```js
BOOKS = {
  drama: [
    {
      title: "Book title",
      author: "Book author",
      genres: ["drama", "comedy"],
      isbn: "145-7-856-89-2",
    },
  ];
}

PERSON = {
    id: 'person_uuid',
    first_name: "Person's first_name",
    last_name: "Person's last_name",
    phone_number: "Person's phone number",
    address: "Person's address",
    balance: "Person's balance",
    books_borrowed: [
        {
            isbn: "145-7-856-89-2",
            dates: {
                start: "Book's taken day from library",
                end: "Person returned day to library",
            }
            type: 'online' | 'offline',
            borrow_prices: {
                online: 'online price',
                offline: 'offline price'
            }
        }
    ]
}
```
