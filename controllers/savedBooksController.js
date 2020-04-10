const axios = require("axios");
const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Book.find()
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    },
    
    remove: function (req, res) {
        console.log(req.params)
        console.log(req.query)
        db.Book.findById(req.query.id)
            .then(dbBook => dbBook.remove())
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    }
}