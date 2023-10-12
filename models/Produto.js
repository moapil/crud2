const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Produto = db.define('produto',{
    nome: {
        type: DataTypes.STRING(30)
    },
    qtde_produto: {
        type: DataTypes.INTEGER
    },
    preco_prod: {
        type: DataTypes.DOUBLE
    }
},{
    createdAt: false,
    updatedAt: false
})

// Produto.sync({force:true})

module.exports = Produto