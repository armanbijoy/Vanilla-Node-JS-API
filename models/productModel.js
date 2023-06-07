const products = require('../data/products.json')
const {v4: uuid} = require('uuid')
const {writeDatatoFile} = require('../utils')

const findAll = ()=>{

    return new Promise((resolve, reject)=>{
        resolve(products)
    })
}


const findById =  (id)=>{
    return new Promise((resolve, reject)=>{
        const product = products.find((p)=> p.id===id)
        resolve(product)
    })


}

function create(){
    return new Promise((resolve, reject)=>{
        const newProduct = {id: uuidv4(), ...products}
        products.push(newProduct)
        writeDatatoFile('./data/products.json', products)

    })
}






module.exports = {
    findAll,
    findById
} 