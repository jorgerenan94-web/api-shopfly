const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products");
const productsMiddleware = require("../middlewares/products");

router.post("/products", productsMiddleware.validadeCreateProduct, productsController.createProduct)
router.get("/products", productsController.getAllProducts)

module.exports = router;