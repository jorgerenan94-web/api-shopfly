const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products");
const productsMiddlewares = require("../middlewares/products");

router.post("/products", productsMiddlewares.validadeCreateProduct, productsController.createProduct)

module.exports = router;