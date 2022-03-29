const {
  Category,
  Checkout,
  Item,
  Receipt,
  Registry
} = require('../models/index')

const getRegistry = async (req, res) => {
  try {
    const registry = await Registry.find()
    return res.status(201).send(registry)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getRegistryCategory = async (req, res) => {
  try {
    const category = await Category.find()
    return res.status(201).send(category)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const checkoutItems = async (req, res) => {
  try {
    const registryId = req.body.registry
    const registry = await Registry.findById(registryId)
    const checkout = await new Checkout(req.body)
    await Registry.findByIdAndUpdate(registryId, {
      checkout: [...registry.checkout, checkout._id]
    })
    await checkout.save()
    return res.status(201).json(checkout)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

// const getItemById = async (req, res) => {
//   try {
//     const registryItem = await Item.findById(req.params.id)
//     return res.status(201).send(registryItem)
//   } catch (error) {
//     return res.status(500).send(error.message)
//   }
// }

// const viewCart = async (req, res) => {
//   try {
//     const cartItem = await Cart.findById(req.params.id)
//     return res.status(201).send(cartItem)
//   } catch (error) {
//     return res.status(500).send(error.message)
//   }
// }

module.exports = {
  getRegistry,
  getRegistryCategory,
  checkoutItems
  // viewCart
}
