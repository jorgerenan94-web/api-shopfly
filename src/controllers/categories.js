const { categoriesModel } = require("../models/categories");

async function getAllCategories(req, res){
    try {
        const result = await categoriesModel.query(`SELECT * FROM categories`)

        res.status(200).send(result.rows)
    } catch (error) {
        console.error(`Erro ao buscar categorias:`, error);
        res.status(500).send({ error: `Erro ao buscar categorias`})
    }
}

module.exports = {
    getAllCategories
}