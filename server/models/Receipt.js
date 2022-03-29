const { Schema } = require('mongoose')

const Receipt = new Schema(
  {
    item: [{ type: Schema.Types.ObjectId, ref: 'Checkout', required: true }],
    totalCost: { type: Number, required: true },
    date: { type: Date, required: true },
    purchaseStatus: { type: Boolean, required: false },
    registry: {
      type: Schema.Types.ObjectId,
      ref: 'Registry',
      required: true
    }
  },
  { timestamps: true }
)

module.exports = Receipt
