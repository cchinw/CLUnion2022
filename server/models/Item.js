const { Schema } = require('mongoose')

const Item = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    quantityNeeded: { type: Number, required: false },
    Link: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Item
