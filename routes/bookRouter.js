const express = require("express");
const router = express.Router();

const {
  getBooks,
  deleteBook,
  addBook,
  getBookById,
  updateBook,
} = require("../controllers/bookController");

router.get("/", getBooks);
router.get("/:id", getBookById);
router.post("/save", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
