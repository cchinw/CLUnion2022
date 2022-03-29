const mongoose = require('mongoose')
const ItemSchema = require('./Item')
const CheckoutSchema = require('./Checkout')
const CartSchema = require('./Cart')
const ReceiptSchema = require('./Receipt')
const RegistrySchema = require('./Registry')

const Item = mongoose.model('items', ItemSchema)
const Checkout = mongoose.model('checkout', CheckoutSchema)
const Cart = mongoose.model('itemlist', CartSchema)
const Receipt = mongoose.model('receipt', ReceiptSchema)
const Registry = mongoose.model('registry', RegistrySchema)

module.exports = {
  Item,
  Checkout,
  Cart,
  Receipt,
  Registry
}
