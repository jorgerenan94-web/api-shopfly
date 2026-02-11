const { categoriesModel } = require("../models/categories");

async function getAllCategories(req, res){
    try {
        const result = await categoriesModel.query(`SELECT * FROM categories ORDER BY id CRES`)

        if(result.rows.length === 0){
            return res.status(400).send({ meessage: `Nenhuma categoria encontrada`})
        }

        res.status(200).send(result.rows)
    } catch (error) {
        console.error(`Erro ao buscar categorias:`, error);
        res.status(500).send({ error: `Erro ao buscar categorias`})
    }
}

module.exports = {
    getAllCategories
}