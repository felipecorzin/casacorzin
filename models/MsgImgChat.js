const { Schema, model } = require('mongoose');

// MSGIMGCHAT
const MsgImgChatSchema = new Schema({
    message: {
        type: String
    },
    created: {
        type: Date
    },
    img: {
        type: String 
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        //required: [ true, 'Debe de existir una referencia a un cliente' ]
    }
});

MsgImgChatSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

MsgImgChatSchema.pre('save', function( next ) {
    this.created = new Date();
    next();
});

module.exports = model('MsgImgChat', MsgImgChatSchema);