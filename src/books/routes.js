const { Router } = require("express")
const router = Router()

const Book = require("./model")

router.post("/addbook", async (req, res) => {
    console.log(req.body);
    const book = await Book.create({
         title: req.body.title,
         author: req.body.author,
         genre: req.body.genre,
    })
    const successResponse = {
         book: book,
         message: "book Created",
    };
         res.status(200).json(successResponse);
 });


router.get("/getallbook", async (req, res) => { 
    const listOfBooks = await Book.findAll()
        const successResponse = {
            message: "success",
            books: listOfBooks
        };
        res.status(201).json(successResponse);
    });

router.get("/bookByAuthor", async (req, res) => { 
    const bookByAuthor = await Book.findAll({
        where: {
            author: req.body.author
          }
    });
        const successResponse = {
            message: "success",
            books: bookByAuthor
         };
        res.status(201).json(successResponse);
        });

router.get("/deleteByTitle", async (req, res) => { 
    const deleteByTitle = await Book.destroy({
        where: {
            title: req.body.title
          }
    });
        const successResponse = {
            message: "success",
            books: deleteByTitle
         };
        res.status(201).json(successResponse);
        });

router.delete('/deleteallbooks', async (req, res) => {
            const deleteAllBooks = await Book.destroy({
                where: {},
                truncate: true, 
            })
            res.status(201).json({ message:`${deleteAllBooks} have been delete` });
        })

    
router.put("/updatebytitle", async (req, res) => {
        const {title} = req.body;
        const {author, genre} = req.body;
        
        const updatebytitle = await Book.update(
            {author, genre},
            {where: {title} }
        );
        const successResponse = {
        message: "success",
        books: updatebytitle
        }
        res.status(201).json(successResponse)   
        })
      

module.exports = router;