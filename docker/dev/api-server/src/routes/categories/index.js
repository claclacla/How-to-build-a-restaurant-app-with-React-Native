const express = require('express');
const router = express.Router();

let categories = [
  { uid: "gTp9vMd4", name: "Pizza" },
  { uid: "Lk3oPgkB", name: "Pasta" },
  { uid: "96rJt8dV", name: "Hamburger" }
]

router
  .get('/', function (req, res, next) {
    res.send({
      data: categories
    });
  });

module.exports = router;