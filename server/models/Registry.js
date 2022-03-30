const { Schema } = require('mongoose')

const Registry = new Schema(
  {
    greeting: { type: String, required: true },
    title: { type: String, required: true },
    itemsLeft: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    checkout: { type: Schema.Types.ObjectId, ref: 'Checkout', required: false },
    receipts: { type: Schema.Types.ObjectId, ref: 'Receipt', required: false }
  },
  { timestamps: true }
)

module.exports = Registry
