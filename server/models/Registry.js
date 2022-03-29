const { Schema } = require('mongoose')

const Registry = new Schema(
  {
    greeting: { type: String, required: true },
    title: { type: String, required: true },
    cart: { type: Schema.Types.ObjectId, ref: 'Cart', required: true },
    quantityLeft: {
      type: Schema.Types.ObjectId,
      ref: 'Checkout',
      required: true
    },
    receipt: { type: Schema.Types.ObjectId, ref: 'Receipt', required: false }
  },
  { timestamps: true }
)

module.exports = Registry
