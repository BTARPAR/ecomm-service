import mongoose from 'mongoose'
import {ProductSchema} from "../models/productModel";

const Products = mongoose.model('Products', ProductSchema, 'products')

export const getAllProducts = (req, res) => {
    Products.find({}, (err, orders) => {
        if (err) {
            res.send(err)
        }
        res.json(orders)
    })
}

export const searchProducts = async (req, res, next) => {
    const searchQuery = new RegExp('skksdbvuksdv', 'g')
    Products.find({
        $or: [
            {seller_name: searchQuery},
            {specification: searchQuery},
            {long_description: searchQuery},
            {productName: searchQuery}
        ]
    }, (err, products) => {
        if (err) {
            res.send(err)
        }
        res.json(products)
    })
}

export const getProduct = async (req, res, next) => {
    Products.findById(req.query.id, (err, order) => {
        if (err) {
            res.send(err)
        }
        res.json(order)
    })
}

export const getProductsByCategory = async (req, res, next) => {
    Products.find({}, {"category": 1}, (err, order) => {
        if (err) {
            res.send(err)
        }
        res.json(order)
    })
}