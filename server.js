const express = require("express");
const app = express();
const port = 3000;

const bookRouter = require("./routes/bookRouter");

app.use(express.json());

app.use("/api/books", bookRouter);

app.use((req, res, next) => {
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
