const mongoose = require('mongoose')
const ItemSchema = require('./Item')
const CheckoutSchema = require('./Checkout')
const CategorySchema = require('./Category')
const ReceiptSchema = require('./Receipt')
const RegistrySchema = require('./Registry')

const Item = mongoose.model('items', ItemSchema)
const Checkout = mongoose.model('checkout', CheckoutSchema)
const Category = mongoose.model('itemlist', CategorySchema)
const Receipt = mongoose.model('receipt', ReceiptSchema)
const Registry = mongoose.model('registry', RegistrySchema)

module.exports = {
  Item,
  Checkout,
  Category,
  Receipt,
  Registry
}
