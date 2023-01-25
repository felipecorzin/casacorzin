const { Schema, model } = require('mongoose');

const PaymentSchema = Schema({
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

PaymentSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

PaymentSchema.pre('save', function( next ) {
    this.created = new Date();
    next();
});

PaymentSchema.pre('save', function( next ) {
    this.send = new Date();
    next();
});


module.exports = model('Payment', PaymentSchema );