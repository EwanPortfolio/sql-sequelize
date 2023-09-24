const { Router } = require("express");
const authorRouter = Router();
const Author = require("./model")

 authorRouter.post("/addAuthor", async (req, res) => {
     const addAuthor = await Author.create({
        Name: req.body.Name
     })
    const successResponse = {
         Author: addAuthor,
      message: "Author Created",
    };
       res.status(200).json(successResponse);
     });





module.exports = authorRouter;