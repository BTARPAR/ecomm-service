import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const OrderSchema = new Schema({
    fullname: {
        type: String,
    },
    email: {
        type: String,
    },
    street: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zip: {
        type: String
    },
    cc_name: {
        type: String,
    },
    cc_no: {
        type: String
    },
    cc_month: {
        type: String
    },
    cc_year: {
        type: String
    },
    cc_cvv: {
        type: String
    },
    products: {
        type: Array
    },
    total: {
        type: Number
    },
    date: {
        type: String,
        default: new Date()
    }
})