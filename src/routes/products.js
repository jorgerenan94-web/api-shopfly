const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products");
const productsMiddleware = require("../middlewares/products");

router.post("/products", productsMiddleware.validadeCreateProduct, productsController.createProduct)

module.exports = router;