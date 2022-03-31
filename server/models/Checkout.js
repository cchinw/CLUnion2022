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
      { type: Schema.Types.ObjectId, ref: 'Registry', required: false }
    ],
    reservedStatus: { type: Boolean, required: false }
  },
  { timestamps: true }
)

module.exports = Checkout
