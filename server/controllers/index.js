const {
  Category,
  Checkout,
  Item,
  Receipt,
  Registry
} = require('../models/index')

// This works
const getRegistry = async (req, res) => {
  try {
    const registry = await Registry.find()
    return res.status(201).send(registry)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
// This works
const getRegistryById = async (req, res) => {
  try {
    const registry = await Registry.findById(req.params.regid)
    return res.status(201).send(registry)
  } catch (error) {
    console.log(error.message)
    return res.status(500).send(error.message)
  }
}
// This works
const createReceipt = async (req, res) => {
  try {
    const registryId = req.body.registry
    // console.log('registryId' + registryId)
    const registry = await Registry.findById(registryId)
    // console.log('registry' + registry)
    const receipt = await new Receipt(req.body)
    await Registry.findByIdAndUpdate(registryId, {
      receipts: [receipt._id]
    })
    await receipt.save()
    return res.status(201).json(receipt)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
// This works
const getReceipts = async (req, res) => {
  try {
    const receipt = await Receipt.find()
    return res.status(201).send(receipt)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
//This works
const getReceiptbyId = async (req, res) => {
  try {
    const receipt = await Receipt.findById(req.params.rId)
    return res.status(201).send(receipt)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
//This Works
const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id)
    return res.status(201).json(category)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
// This works!!
const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id)
    return res.status(201).send(item)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
// This works!
const getItemsByCategoryId = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id)
    let item = []
    for await (const itemId of category.items) {
      item.push(await Item.findById(itemId))
    }
    return res.status(201).json(item)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
//This works!!!
const createCheckout = async (req, res) => {
  try {
    const registry = await Registry.findById(req.params.regid)
    console.log(registry)
    if (registry.itemsLeft > 0) {
      registry.itemsLeft = registry.itemsLeft - 1
      registry.save()
      res.json(registry)
    } else {
      res.json({ msg: 'This gift has already been purchased' })
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = {
  getRegistry,
  getRegistryById,
  getCategoryById,
  createReceipt,
  getReceipts,
  getReceiptbyId,
  getItemById,
  getItemsByCategoryId,
  createCheckout
}
