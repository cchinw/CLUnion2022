const { Schema } = require('mongoose')

const Registry = new Schema(
  {
    title: { type: String, required: true },
    list: { type: Schema.Types.ObjectId, ref: 'ItemList', required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
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
