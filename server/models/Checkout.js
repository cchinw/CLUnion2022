const { Schema } = require('mongoose')

const Checkout = new Schema(
  {
    items: [{ type: Schema.Types.ObjectId, ref: 'Cart', required: true }],
    totalcost: { type: Number, required: true },
    email: { type: String, required: true },
    giftMessage: { type: String, required: true },
    paymentDetails: { type: Number, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: Number, required: true }
  },
  { timestamps: true }
)
