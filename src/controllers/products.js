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

async function getAllProducts(req, res){
    try {
        const result = await productsModel.query(`SELECT * FROM products ORDER BY id DESC;`)

        if(result.rows.length === 0){
            return res.status(400).send({ meessage: `Nenhum produto encontrado`})
        }

        res.status(200).send(result.rows)
    } catch (error) {
        console.error(`Erro ao buscar produtos:`, error);
        res.status(500).send({ error: `Erro ao buscar produtos`})
    }
}

async function deleteProduct(req, res) {
    const { id } = req.params

    try {
        const result = await productsModel.query(`DELETE FROM products WHERE id = $1 RETURNING *;`, [id])
        res.status(200).send(result.rows[0])
    } catch (error) {
        console.error(`Erro ao deletar produto:`, error)
        res.status(500).send({ error: `Erro ao deletar produto`})
    }
    
}
module.exports = {
    createProduct,
    getAllProducts,
    deleteProduct
}