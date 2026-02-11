const express = require("express");
const router = express.Router();

const categoriesController = require("../controllers/categories");
//const productsMiddleware = require("../middlewares/products");

router.get("/categories", categoriesController.getAllCategories)

module.exports = router;