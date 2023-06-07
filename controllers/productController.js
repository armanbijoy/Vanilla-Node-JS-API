const { json } = require('stream/consumers')
const Product  = require('../models/productModel')
//const Product = require('../data/products.json')

async function getProducts(req,res){
    try{
        const products = await Product.findAll()
        res.writeHead(200,{'Content-Type': 'application/json'})
        res.end(JSON.stringify(products))
    }
    catch(err){
        console.log(err)
    }
}


async function getProduct(req,res,id){
    try{
        const product = await Product.findById(id)

        if(!product)
        {
            res.writeHead(404,{'Content-Type': 'application/json'})
             res.end({message: 'Product Not Found'})
        }
        else{
            res.writeHead(200,{'Content-Type': 'application/json'})
            res.end(JSON.stringify(product))
        }
        
    }
    catch(err){
        console.log(err)
    }
}




async function createProduct(req,res){
    try{
        const product = {
            title: 'test product',
            description: 'This my product',
            price: 100
        }

        const newProduct = await Product.create(product)
        res.writeHead(201, {'Content-Type': 'aplication/json'})
        return res.end(JSON.stringify(newProduct))
    }
    catch(err){
        console.log(err)
    }
}










module.exports = {
    getProducts,
    getProduct,
    createProduct
}