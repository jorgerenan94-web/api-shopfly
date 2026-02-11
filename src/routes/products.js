const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products");
const productsMiddleware = require("../middlewares/products");

router.post("/products", productsMiddleware.validadeCreateProduct, productsController.createProduct)
router.get("/products", productsController.getAllProducts)
router.delete("/products/:id", productsMiddleware.validadeDeleteProduct, productsController.deleteProduct)
router.put("/products/:id", productsMiddleware.validadeUpdateProduct, productsController.updateProduct)
router.get("/products/:name", productsController.getNameProducts)

module.exports = router;