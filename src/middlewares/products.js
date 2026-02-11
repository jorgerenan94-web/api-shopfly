function validadeCreateProduct(req, res, next){
    const {name, price, category_id} = req.body

    if(!name || !price || !category_id){
        return res.status(400).send({ error: "Nome, preço e categoria_id são obrigatórios."})
    }

    next()
}

function validadeDeleteProduct(req, res, next){
    const { id } = req.params

    if(!id){
        return res.status(400).send({ error: "O id é obrigatório!"})
    }

    next()
}
module.exports = {
    validadeCreateProduct,
    validadeDeleteProduct
}