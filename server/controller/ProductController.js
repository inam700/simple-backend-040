const asyncHandler = require("express-async-handler");
const PRODUCTS = require("../model/Products");

const getProducts = asyncHandler(async (req, res) => {
  const products = await PRODUCTS.find({});
  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await PRODUCTS.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("product not found");
  }
});

module.exports = { getProducts, getProductById };
