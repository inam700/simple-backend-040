const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controller/ProductController");
router.route("/").get(getProducts);
router.route("/:id").get(getProductById);
module.exports = router;
