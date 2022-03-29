const { Schema } = require('mongoose')

const Cart = new Schema(
  {
    title: { type: String, required: true },
    items: [{ type: Schema.Types.ObjectId, ref: 'Item', required: true }],
    reservedStatus: { type: Boolean, required: true }
  },
  { timestamps: true }
)

module.exports = Cart
