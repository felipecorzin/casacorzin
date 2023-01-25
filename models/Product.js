const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
    categoria: {
        type: String,
    },
    name: {
        type: String,
    },
    amount: {
        type: Number
    },
    price: {
        type: Number
    },
    img: {
        type: String,
    },
    desc: {
        type: String,
    },
    total: {
        type: Number
    }
});

ProductSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model('Product', ProductSchema );