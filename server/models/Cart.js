const { Schema } = require('mongoose')

const Cart = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    items: [{ type: Schema.Types.ObjectId, ref: 'Item', required: true }],
    quantitySelected: { type: Number, min: 0, required: false },
    reservedStatus: { type: Boolean, required: true }
  },
  { timestamps: true }
)

module.exports = Cart
