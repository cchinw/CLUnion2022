const { Cart, Checkout, Item, Receipt, Registry } = require('../models/index')

const getRegistry = async (req, res) => {
  try {
    const registry = await Registry.find()
    return res.status(201).send(registry)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getRegistryItemById = async (req, res) => {
  try {
    const registryItem = await Item.findById(req.params.id)
    return res.status(201).send(registryItem)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getRegistry,
  getRegistryItemById
}
