require("dotenv").config();
const router = require("./books/routes");
const authorRouter = require("./author/routes")
const Book = require("./books/model")
const Author = require("./author/model")

const express = require("express");



const port = process.env.PORT || 5001;
const app = express();

app.use(express.json());

app.use("/books", router)



const syncTables = () => {
    Book.hasOne(Author);
    Author.hasMany(Book);
    
    Book.sync({ alter: true });
    Author.sync();
};


app.get("/health", (req, res) => {
    res.status(200).json({ message: "API is healthy"})
})


app.listen(port, () => {
    syncTables();
    console.log(`App is listening on port ${port}`);
})

