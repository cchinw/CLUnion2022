const { Schema } = require('mongoose')

const Checkout = new Schema(
  {
    giftMessage: { type: String, required: false },
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
