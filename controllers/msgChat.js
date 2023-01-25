const { response } = require('express');
const MsgChat = require('../models/MsgChat');
const Usuario = require('../models/Usuario');

const createMsgChat = (req, res = response) => {
    const msgChat = new MsgChat({
        message: req.body.message,
    });
    msgChat.save((err,msgChat) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (req.body.usuario) {
            Usuario.find(
              {
                name: { $in: req.body.usuario }
              },
              (err, usuario) => {
                if (err) {
                  res.status(500).send({ message: err });
                  return;
                }
      
                msgChat.usuario = usuario.map(usuario => usuario._id);
                msgChat.save(err => {
                  if (err) {
                    res.status(500).send({ message: err });
                    return;
                  }
      
                  res.send({ message: "El msgChat se creo con éxito!" });
                });
              }
            );
        } else {
            Usuario.findOne((err, usuario) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              msgChat.usuario = [usuario._id];
              msgChat.save(err => {
                if (err) {
                  res.status(500).send({ message: err });
                  return;
                }
      
                //res.send({ message: "El msgChat se creo con éxito!" });
                res.json({
                    message: "El msgChat se creo con éxito!",
                    msgChat
                });
              });
            });
        }
    });
};

const findAll = async(req, res = response ) => {

    const message = req.query.message;
    var condition = message ? { message: { $regex: new RegExp(message), $options: "i" } } : {};

    const msgChats = await MsgChat.find(condition)
                            .populate('usuario', 'name')
                            .exec();


    res.json({
        ok: true,
        msgChats
    });

};

const deleteMsgChat = async(req, res = response ) => {

    const id = req.params.id;

    MsgChat.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });

};

module.exports = {
    createMsgChat,
    findAll,
    deleteMsgChat
}