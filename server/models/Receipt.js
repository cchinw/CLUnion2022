const { Schema } = require('mongoose')

const Receipt = new Schema(
  {
    items: [{ type: Schema.Types.ObjectId, ref: 'Checkout', required: true }],
    totalCost: { type: Number, required: true },
    date: { type: Date, required: true },
    purchaseStatus: { type: Boolean, required: false },
    purchasedFrom: {
      type: Schema.Types.ObjectId,
      ref: 'Registry',
      required: true
    }
  },
  { timestamps: true }
)

module.exports = Receipt
