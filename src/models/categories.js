const categoriesModel = require("../config/database");

const sql = `
    CREATE TABLE IF NOT EXISTS categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL
    );
`;

const sqlInsert = `
    INSERT INTO categories (name) VALUES 
        ('Eletrônicos'), ('Acessórios'), ('Áudio'), ('Informática'), 
        ('Hardware'), ('Redes'), ('Móveis'), ('Decoração'), 
        ('Casa'), ('Eletrodomésticos'), ('Cozinha'), ('Esportes'), 
        ('Calçados'), ('Vestuário'), ('Games'), ('Brinquedos'), 
        ('Beleza'), ('Saúde'), ('Livros'), ('Papelaria'), 
        ('Ferramentas'), ('Automotivo'), ('Bebidas'), ('Alimentos');
`;
categoriesModel.query(sql)
    .then(() => console.log("Tabela 'categories' criada com sucesso!"))
    .catch((err) => console.error("Erro ao criar tabela 'categories':", err));

categoriesModel.query(sqlInsert)
    .then(() => console.log("Categorias inseridas com sucesso!"))
    .catch((err) => console.error("Erro ao inserir categorias:", err));

module.exports = {
    categoriesModel
};