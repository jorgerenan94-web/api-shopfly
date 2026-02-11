const { categoriesModel } = require("../models/categories");

async function getAllCategories(req, res){
    try {
        const result = await categoriesModel.query(`SELECT * FROM categories ORDER BY id DESC`)

        res.status(200).send(result.rows)
    } catch (error) {
        console.error(`Erro ao buscar categorias:`, error);
        res.status(500).send({ error: `Erro ao buscar categorias`})
    }
}

async function createCategory(req, res) {
    const { name } = req.body
    
    try {
        const result = await categoriesModel.query(`INSERT INTO categories name VALUES $1 RETURNING *;`, [name]);
        res.status(201).send(result.rows[0])
    } catch (error) {
        console.error(`Erro ao criar categoria:`, error)
        res.status(500).send({error: `Erro ao criar categoria`})
    }
}
module.exports = {
    getAllCategories,
    createCategory
}