const { Schema, model } = require('mongoose');

// MSGCHAT
const msgChatSchema = new Schema({
    message: {
        type: String
    },
    created: {
        type: Date
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        //required: [ true, 'Debe de existir una referencia a un cliente' ]
    }
});

msgChatSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

msgChatSchema.pre('save', function( next ) {
    this.created = new Date();
    next();
});

module.exports = model('MsgChat', msgChatSchema );