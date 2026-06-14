let books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "1984", author: "George Orwell" },
];

const getBooks = (req, res) => {
  res.json(books);
};

const getBookById = (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((book) => book.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

const addBook = (req, res) => {
  const { title, author } = req.body;

  const newId = books.length > 0 ? Math.max(...books.map((b) => b.id)) + 1 : 1;
  const newBook = {
    id: newId,
    title,
    author,
  };
  books.push(newBook);
  res.json(newBook);
};

const updateBook = (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;
  const bookIndex = books.findIndex((book) => book.id === bookId);
  if (bookIndex !== -1) {
    books[bookIndex] = { id: bookId, title, author };
    res.json(books[bookIndex]);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

const deleteBook = (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter((book) => book.id !== bookId);
  res.json({ message: `Book with id ${bookId} deleted` });
};

module.exports = {
  getBooks,
  deleteBook,
  addBook,
  getBookById,
  updateBook,
};
