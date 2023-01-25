const { Schema, model } = require('mongoose');

const OrderSchema = Schema({
    created: {
        type: String,
    },
    send: {
        type: String,
    },
    totalPrice: {
        type: Number,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        //required: [ true, 'Debe de existir una referencia a un usuario' ]
    }
});

OrderSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

OrderSchema.pre('save', function( next ) {
    this.created = new Date();
    next();
});

OrderSchema.pre('save', function( next ) {
    this.send = new Date();
    next();
});

module.exports = model('Order', OrderSchema );