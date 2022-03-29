const { Cart, Checkout, Item, Receipt, Registry } = require('../models/index')

const getRegistry = async (req, res) => {
  try {
    const registry = await Registry.find()
    return res.status(201).json(registry)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCart = async (req, res) => {
  try {
    const cart = await Cart.find()
    return res.status(201).send(cart)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getItemById = async (req, res) => {
  try {
    const registryItem = await Item.findById(req.params.id)
    return res.status(201).send(registryItem)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const viewCart = async (req, res) => {
  try {
    const cartItem = await Cart.findById(req.params.id)
    return res.status(201).send(cartItem)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getRegistry,
  getItemById,
  getCart,
  viewCart
}
