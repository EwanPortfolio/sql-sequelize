require("dotenv").config();
const router = require("./books/routes");
const Book = require("./books/model")


const express = require("express");

const port = process.env.PORT || 5001;
const app = express();

app.use(express.json());

app.use("/books", router)



const syncTables = () => {
    Book.sync();
};

   
//Author

// const Author = connection.define("Author", {
//     Name:{
//         type: DataTypes.STRING,
//         unique : true,
//         allowNull: false,
//     }});

// app.post("/addAuthor", async (req, res) => {
//     const addAuthor = await Author.create({
//         Name: req.body.Name
//     })
//     const successResponse = {
//         Author: addAuthor,
//         message: "Author Created",
//    };
//         res.status(200).json(successResponse);
// });



app.get("/health", (req, res) => {
    res.status(200).json({ message: "API is healthy"})
})


app.listen(port, () => {
    syncTables();
    console.log(`App is listening on port ${port}`);
})

