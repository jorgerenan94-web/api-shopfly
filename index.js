require("dotenv").config();
const express = require("express");
const database = require("./src/config/database");
const routesProducts = require("./src/routes/products");
const categoriesModel = require("./src/models/categories");

const app = express();
const port = 4606;

app.use(express.json())

app.use("/", routesProducts)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})