const { Schema } = require('mongoose')

const Item = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    quantityRemaining: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = Item
