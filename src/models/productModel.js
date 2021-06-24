import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ProductSchema = new Schema({
    productName: {
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
    category:{
        type: String
    }
})

// ProductSchema.index({seller_name: 'text'});

module.exports = {ProductSchema}