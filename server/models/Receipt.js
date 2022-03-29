const { Schema } = require('mongoose')

const Receipt = new Schema(
  {
    items: { type: Schema.Types.ObjectId, ref: 'Checkout', required: true },
    totalCost: { type: Number, required: true },
    date: { type: String, required: true },
    purchaseStatus: { type: Number, required: true },
    purchasedFrom: {
      type: Schema.Types.ObjectId,
      ref: 'Registry',
      required: true
    }
  },
  { timestamps: true }
)

module.exports = Receipt
