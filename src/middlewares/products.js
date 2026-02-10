function validadeCreateProduct(req, res, next){
    const {name, price, category_id} = req.body

    if(!name || !price || !category_id){
        return res.status(400).send({ error: "Nome, preço e categoria_id são obrigatórios."})
    }

    next()
}

module.exports = {
    validadeCreateProduct
}