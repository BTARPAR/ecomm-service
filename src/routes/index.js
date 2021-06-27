import express from "express";
import {resetPassword, signUpUser, userLogin} from "../controllers/userController";
import {
    getAllProducts,
    getProduct, getProductsByCategory,
    searchProducts
} from "../controllers/productController";
import {getOrder, getOrders, placeOrder} from "../controllers/orderController";
import {checkAuth} from "../middleware/checkAuth";

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

Router.route('/reset')
    .post(checkAuth,(req, res, next) => {
        // middleware
        console.log(`Request from : ${req.originalUrl}`)
        console.log(`Request type : ${req.method}`)
        next()
    }, resetPassword)

Router.route('/checkout')
    .post(checkAuth,(req, res, next) => {
        // middleware
        console.log(`Request from : ${req.originalUrl}`)
        console.log(`Request type : ${req.method}`)
        next()
    }, placeOrder)

Router.route('/order')
    .get(checkAuth,(req, res, next) => {
        // middleware
        console.log(`Request from : ${req.originalUrl}`)
        console.log(`Request type : ${req.method}`)
        next()
    }, getOrder)

Router.route('/orders')
    .get(checkAuth,(req, res, next) => {
        // middleware
        console.log(`Request from : ${req.originalUrl}`)
        console.log(`Request type : ${req.method}`)
        next()
    }, getOrders)

Router.route('/heartbeat')
    .get(checkAuth, (req, res) => {
        res.status(200).send()
    })


export default Router