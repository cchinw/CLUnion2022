const { Schema } = require('mongoose')

const Checkout = new Schema(
  {
    item: [{ type: Object }],
    giftMessage: { type: String, required: false },
    email: { type: String, required: false },
    paymentDetails: { type: Number, required: false },
    name: { type: String, required: false },
    address: { type: String, required: false },
    phoneNumber: { type: Number, required: false },
    reservedStatus: { type: Boolean, required: false }
  },
  { timestamps: true }
)

module.exports = Checkout
