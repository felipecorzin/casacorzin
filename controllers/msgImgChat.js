const { response } = require('express');
const MsgImgChat = require('../models/MsgImgChat');
const Usuario = require('../models/Usuario');

const createMsgImgChat = (req, res = response) => {
    const msgImgChat = new MsgImgChat({
        message  : req.body.message,
        img      : req.body.img    
    });
    msgImgChat.save((err,msgImgChat) => {
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
      
                msgImgChat.usuario = usuario.map(usuario => usuario._id);
                msgImgChat.save(err => {
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
              msgImgChat.usuario = [usuario._id];
              msgImgChat.save(err => {
                if (err) {
                  res.status(500).send({ message: err });
                  return;
                }
      
                //res.send({ message: "El msgChat se creo con éxito!" });
                res.json({
                    message: "El msgChat se creo con éxito!",
                    msgImgChat
                });
              });
            });
        }
    });
};

const findAll = async(req, res = response ) => {

  const message = req.query.message;
  var condition = message ? { message: { $regex: new RegExp(message), $options: "i" } } : {};

  const msgImgChats = await MsgImgChat.find(condition)
                          .populate('usuario', 'name')
                          .exec();


  res.json({
      ok: true,
      msgImgChats
  });

};

const findOne = async(req, res = response ) => {

  const id = req.params.id;
  MsgImgChat.findById(id)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found Tutorial with id " + id });
    else res.send(data);
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving Tutorial with id=" + id });
  });

};

const deleteMsgImgChat = async(req, res = response ) => {

    const id = req.params.id;

    MsgImgChat.findByIdAndRemove(id, { useFindAndModify: false })
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
    createMsgImgChat,
    findAll,
    findOne,
    deleteMsgImgChat
}