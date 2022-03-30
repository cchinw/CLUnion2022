const { Schema } = require('mongoose')

const Checkout = new Schema(
  {
    items: [{ type: Schema.Types.ObjectId, ref: 'Registry', required: false }],
    totalcost: { type: Number, required: true },
    giftMessage: { type: String, required: false },
    email: { type: String, required: false },
    paymentDetails: { type: Number, required: false },
    name: { type: String, required: false },
    address: { type: String, required: false },
    phoneNumber: { type: Number, required: false },
    category: [
      { type: Schema.Types.ObjectId, ref: 'Registry', required: true }
    ],
    reservedStatus: { type: Boolean, required: true }
  },
  { timestamps: true }
)

module.exports = Checkout
