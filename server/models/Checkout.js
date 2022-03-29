const { Schema } = require('mongoose')

const Checkout = new Schema(
  {
    items: [{ type: Schema.Types.ObjectId, ref: 'Cart', required: true }],
    totalcost: { type: Number, required: true },
    giftMessage: { type: String, required: true },
    email: { type: String, required: true },
    paymentDetails: { type: Number, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    category: [
      { type: Schema.Types.ObjectId, ref: 'Registry', required: true }
    ],
    reservedStatus: { type: Boolean, required: true }
  },
  { timestamps: true }
)

module.exports = Checkout
