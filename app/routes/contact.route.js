const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

router.route("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteALL);

router.route("/favorite")
    .get(contacts.findAllFaforite);

router.route("/:id")
    .get(contacts.finOne)
    .put(contacts.update)
    .delete(contacts.delete);

module.exports = router;