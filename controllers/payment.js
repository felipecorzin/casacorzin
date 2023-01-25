const { response } = require('express');
const Usuario = require('../models/Usuario');
const Payment = require('../models/Payment');

// PAYMENT
// Crear payment
const addPayment = async(req, res = response ) => {
  // Create a Cart
  const payment = new Payment ({
      totalPrice: req.body.totalPrice
  });
  payment.save((err, payment) => {
    if (err) {
        res.status(500).send({ message: err });
        return;
    }
    if (req.body.usuario) {
        Usuario.find(
          { name: { $in: req.body.usuario }},
          (err, usuario) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            payment.usuario = usuario.map(usuario => usuario._id);
            payment.save(err => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              res.send({ message: "El pago se efectuo con éxito!" });
            });
          }
        );
    } else {
        Usuario.findOne((err, usuario) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          payment.usuario = [usuario._id];
          payment.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
  
            //res.send({ message: "El msgChat se creo con éxito!" });
            res.json({
                message: "El pago se efectuo con éxito!",
                payment
            });
          });
        });
      }
  });
};

// Obtener todos los payments
const findAll = async(req, res = response ) => {
  const totalPrice = req.query.totalPrice;
  var condition = totalPrice ? { totalPrice: { $regex: new RegExp(totalPrice), $options: "i" } } : {};
  const payments = await Payment.find(condition)
                          .populate('usuario', 'name')
                          .exec();


  res.json({
      ok: true,
      payments
  });
};


// Eliminar un payment por id
const deletePayment = async(req, res = response ) => {
    const id = req.params.id;
    Payment.findByIdAndRemove(id, { useFindAndModify: false })
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
    addPayment,
    findAll,
    deletePayment
  }