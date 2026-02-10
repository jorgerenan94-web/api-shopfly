const productsModel = require("../models/products");

async function createProduct(req, res) {
    const { name, price, category_id } = req.body
    
    try {
        const result = await productsModel.query(`INSERT INTO products (name, price, category_id) VALUES ($1, $2, $3) RETURNING *;`, [name, price, category_id]);
        res.status(201).send(result.rows[0])
    } catch (error) {
        console.error(`Erro ao criar produto:`, error)
        res.status(500).send({error: `Erro ao criar produto`})
    }
}

module.exports = {
    createProduct
}