import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const ProductSchema = new Schema({
    product_name: {
        type: String,
        default: '',
        trim: true
    },
    long_description: {
        type: String,
        default: '',
        trim: true
    },
    image_url: {
        type: String,
        default: '',
        trim: true
    },
    specification: {
        type: String,
        default: '',
        trim: true
    },
    created_date: {
        type: Date,
        default: Date.now(),
    },
    price: {
        type: Number,
        default: '',
        trim: true
    },
    seller_name: {
        type: String,
        text: true,
        default: '',
        trim: true
    },
    returnable: {
        type: Boolean
    },
    review: {
        type: Number
    },
    category: {
        type: String
    }
})