const { Schema } = require('mongoose')

const Item = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantityNeeded: { type: Number, required: false }
  },
  { timestamps: true }
)

module.exports = Item
