const mongoose = require('mongoose')
const ItemSchema = require('./Item')
const CheckoutSchema = require('./Checkout')
const ItemListSchema = require('./ItemList')
const ReceiptSchema = require('./Receipt')
const RegistrySchema = require('./Registry')

const Item = mongoose.model('items', ItemSchema)
const Checkout = mongoose.model('checkout', CheckoutSchema)
const ItemList = mongoose.model('itemlist', ItemListSchema)
const Receipt = mongoose.model('receipt', ReceiptSchema)
const Registry = mongoose.model('registry', RegistrySchema)

module.exports = {
  Item,
  Checkout,
  ItemList,
  Receipt,
  Registry
}
