require("dotenv").config();
const express = require("express");
const database = require("./src/config/database");
const routesProducts = require("./src/routes/products");
const routesCategories = require("./src/routes/categories");

const app = express();
const port = 4606;

app.use(express.json())

app.use("/", routesProducts)
app.use("/", routesCategories)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})