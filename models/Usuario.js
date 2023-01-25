const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: 'assets/img/avatar.png'
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    created: {
        type: Date
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    lat: {
        type: Number,
    },
    lng: {
        type: Number,
    }
});

UsuarioSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

UsuarioSchema.pre('save', function( next ) {
    this.created = new Date();
    next();
});

module.exports = model('Usuario', UsuarioSchema );