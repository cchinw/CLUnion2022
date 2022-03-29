const { Schema } = require('mongoose')

const Receipt = new Schema(
  {
    items: { type: Schema.Types.ObjectId, ref: 'Checkout', required: true },
    totalCost: { type: Schema.Types.ObjectId, ref: 'Checkout', required: true },
    date: { type: Date, required: true },
    purchaseStatus: { type: Boolean, required: true },
    purchasedFrom: {
      type: Schema.Types.ObjectId,
      ref: 'Item',
      required: true
    }
  },
  { timestamps: true }
)

module.exports = Receipt
