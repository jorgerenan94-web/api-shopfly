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

function validadeUpdateProduct(req, res, next){
    const { id } = req.params
    const {name, price, category_id} = req.body

    if(!name || !price || !category_id || !id){
        return res.status(400).send({ error: "Nome, preço, categoria_id e id são obrigatórios."})
    }

    next()
}
module.exports = {
    validadeCreateProduct,
    validadeDeleteProduct,
    validadeUpdateProduct
}