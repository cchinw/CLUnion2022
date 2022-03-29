const { Schema } = require('mongoose')

const Registry = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    cart: { type: Schema.Types.ObjectId, ref: 'Cart', required: true },
    quantityRequired: { type: Number, required: true },
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
