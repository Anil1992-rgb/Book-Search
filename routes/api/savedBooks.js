const router = require("express").Router();
const savedBooksController = require("../../controllers/savedBooksController");

router
    .route("/mybooks")
    .get(savedBooksController.findAll)
    .delete(savedBooksController.remove);

module.exports = router;