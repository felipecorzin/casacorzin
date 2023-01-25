const { response } = require('express');
const Order = require('../models/Order');
const Usuario = require('../models/Usuario');

const createOrder = async(req, res = response ) => {
    // Create a Order
    const order = new Order ({
      totalPrice : req.body.totalPrice
    });
    order.save((err, order) => {
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
              order.usuario = usuario.map(usuario => usuario._id);
              order.save(err => {
                if (err) {
                  res.status(500).send({ message: err });
                  return;
                }
                res.send({ message: "La order se creo con éxito!" });
              });
            }
          );
      } else {
          Usuario.findOne((err, usuario) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            order.usuario = [usuario._id];
            order.save(err => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
    
              //res.send({ message: "El msgChat se creo con éxito!" });
              res.json({
                  message: "La order se creo con éxito!",
                  order
              });
            });
          });
        }
    })
};
  
    // Obtener todos los carts
const findAll = async(req, res = response ) => {
    const totalPrice = req.query.totalPrice;
    var condition = totalPrice ? { totalPrice: { $regex: new RegExp(totalPrice), $options: "i" } } : {};
    const orders = await Order.find(condition)
                            .populate('usuario', 'name')
                            .exec();


    res.json({
        ok: true,
        orders
    });
};

// Eliminar un order por id
const deleteOrder = async(req, res = response ) => {
  const id = req.params.id;
  Order.findByIdAndRemove(id, { useFindAndModify: false })
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
    createOrder,
    findAll,
    deleteOrder
}