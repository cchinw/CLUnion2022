const { Schema } = require('mongoose')

const Registry = new Schema(
  {
    greeting: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    itemLeft: { type: Schema.Types.ObjectId, ref: 'Checkout', required: true },
    receipt: { type: Schema.Types.ObjectId, ref: 'Receipt', required: true }
  },
  { timestamps: true }
)

module.exports = Registry
