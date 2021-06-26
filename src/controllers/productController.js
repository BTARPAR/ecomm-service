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
    const searchQuery = req.query.id.toLowerCase()
    Products.find({}, (err, products) => {
        if (err) {
            res.send(err)
        }
        const filter = products.filter((item) => (item.product_name.toLowerCase()).indexOf(searchQuery) > -1 ||
            item.category.toLowerCase() === searchQuery ||
            (item.specification.toLowerCase()).indexOf(searchQuery) > -1)
        res.json(filter)
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