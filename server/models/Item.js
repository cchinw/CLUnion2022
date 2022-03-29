const { Schema } = require('mongoose')

const Item = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantityLeft: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = Item
