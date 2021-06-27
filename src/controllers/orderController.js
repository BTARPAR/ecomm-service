import mongoose from 'mongoose'
import {OrderSchema} from "../models/OrderModel";

const Order = mongoose.model('Orders', OrderSchema, 'orders')

export const placeOrder = (req, res, next) => {
    const {cc_no, ...order_info} = req.body
    const mask_cc = cc_no.slice(cc_no.length - 4)
    const newOrder = new Order({...order_info, cc_no: mask_cc})

    newOrder.save((err) => {
        if (err) {
            res.send(err)
        }
        res.status(201).json({
            message: 'Order created successfully'
        })
    })
}

export const getOrder = async (req, res, next) => {
    Order.findOne({_id: req.query.id}, (err, order) => {
        if (err) {
            res.send(err)
        }
        return res.json(order)
    })
}
export const getOrders = async (req, res, next) => {
    Order.find({}).sort({date: 1}).exec((err, orders) => {
        if (err) {
            res.send(err)
        }
        return res.json(orders)
    })
}
