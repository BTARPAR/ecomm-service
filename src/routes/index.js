import express from "express";
import {signUpUser, userLogin} from "../controllers/userController";
import {
    getAllProducts,
    getProduct, getProductsByCategory,
    searchProducts
} from "../controllers/productController";
import {getOrder, placeOrder} from "../controllers/orderController";

const Router = express.Router()

Router.route('/')
    .get((req, res, next) => {
        res.send(`Node & Express Server ROUTE`)
    })

Router.route('/signup')
    .post((req, res, next) => {
        // middleware
        console.log(`Request from : ${req.originalUrl}`)
        console.log(`Request type : ${req.method}`)
        next()
    }, signUpUser)


Router.route('/login')
    .post((req, res, next) => {
        console.log(`Request from : ${req.originalUrl}`)
        console.log(`Request type : ${req.method}`)
        next()
    }, userLogin)

Router.route('/products')
    .get((req, res, next) => {
        console.log(`Request from : ${req.originalUrl}`)
        console.log(`Request type : ${req.method}`)
        next()
    }, getAllProducts)

Router.route('/search')
    .get((req, res, next) => {
        console.log(`Request from : ${req.originalUrl}`)
        console.log(`Request type : ${req.method}`)
        next()
    }, searchProducts)

Router.route('/category')
    .get((req, res, next) => {
        console.log(`Request from : ${req.originalUrl}`)
        console.log(`Request type : ${req.method}`)
        next()
    }, getProductsByCategory)

Router.route('/product')
    .get((req, res, next) => {
        console.log(`Request from : ${req.originalUrl}`)
        console.log(`Request type : ${req.method}`)
        next()
    }, getProduct)

Router.route('/signup')
    .post((req, res, next) => {
        // middleware
        console.log(`Request from : ${req.originalUrl}`)
        console.log(`Request type : ${req.method}`)
        next()
    }, signUpUser)

Router.route('/checkout')
    .post((req, res, next) => {
        // middleware
        console.log(`Request from : ${req.originalUrl}`)
        console.log(`Request type : ${req.method}`)
        next()
    }, placeOrder)

Router.route('/order')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from : ${req.originalUrl}`)
        console.log(`Request type : ${req.method}`)
        next()
    }, getOrder)

Router.route('/orders')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from : ${req.originalUrl}`)
        console.log(`Request type : ${req.method}`)
        next()
    }, getOrder)


export default Router