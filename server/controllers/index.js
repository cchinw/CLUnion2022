const {
  Category,
  Checkout,
  Item,
  Receipt,
  Registry,
  Message
} = require('../models/index')
const { add } = require('../models/Item')

// This works
// Get all registry categories
const getRegistry = async (req, res) => {
  try {
    const registry = await Registry.find()
    return res.status(201).send(registry)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// This works
// Get specific registry item
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
// Get all items
const getItem = async (req, res) => {
  try {
    const registry = await Item.find()
    return res.status(201).send(registry)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// Prevent purchase of already purchased item

const preventPurchase = async (req, res) => {
  try {
    const { quantityNeeded } = req.params
    const purchased = await new Item(quantityNeeded)
    if (purchased > 0) {
      purchased--
      purchased.save()
      res.json(purchased)
    } else {
      res.json({ msg: 'This gift has already been purchased' })
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// This works!!
// get specific registry item
const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id)
    return res.status(201).send(item)
  } catch (error) {}
}

const removeFromCheckout = async (req, res) => {
  try {
    const item = await new Item.findById(req.body)
    const deleteItem = item.save()
    const checkout = await Checkout.findByIdAndUpdate(deleteItem, {
      new: true
    })
    res.json(checkout)
  } catch (error) {
    res.send(error.message)
  }
}

// This Works
// get items added to Checkout
const addToCheckout = async (req, res) => {
  try {
    const checkout = await Checkout.findOne()
    checkout.item = [...checkout.item, req.body]
    checkout.save()
    console.log(checkout)
    return res.status(200).json(checkout)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//This Works
const showCheckout = async (req, res) => {
  try {
    const checkout = await Checkout.findOne()
    return res.status(200).json(checkout)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// This works
const createReceipt = async (req, res) => {
  try {
    const registryId = req.body.registry
    const registry = await Registry.findById(registryId)
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
    const category = await Category.findById(req.params.id)
    const registry = await Registry.findById(req.params.regId)
    console.log(category, registry)
    if (category.items > 0) {
      const itemsLeft = registry.itemsLeft
      itemsLeft--
      category.save()
      res.json(category)
    } else {
      res.json({ msg: 'This gift has already been purchased' })
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getMessage = async (req, res) => {
  try {
    const msg = await Message.find()
    return res.status(200).json({ msg })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getMessageById = async (req, res) => {
  try {
    const { id } = req.params
    const msg = await Message.findById(id)
    if (msg) {
      return res.status(200).json({ msg })
    }
    return res.status(404).send('This Message Does Not Exist!')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createMessage = async (req, res) => {
  try {
    const msg = await new Message(req.body)
    await msg.save()
    return res.status(201).json({ msg })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateMessage = async (req, res) => {
  try {
    const msg = await Message.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.json(msg)
  } catch (err) {
    res.send(err.message)
  }
}

const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Message.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Message Deleted')
    }
    throw new Error('Message Not Found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getRegistry,
  getRegistryById,
  getItem,
  getItemById,
  addToCheckout,
  removeFromCheckout,
  showCheckout,
  getCategoryById,
  createReceipt,
  getReceipts,
  getReceiptbyId,
  getItemsByCategoryId,
  createCheckout,
  preventPurchase,
  getMessage,
  getMessageById,
  createMessage,
  updateMessage,
  deleteMessage
}
