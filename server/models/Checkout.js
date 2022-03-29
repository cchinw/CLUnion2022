const { Schema } = require('mongoose')

const Checkout = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    itemPrice: { type: Number, required: true },
    totalcost: { type: Number, required: true },
    details: { type: String, required: true },
    shipping: { type: String, required: true }
  },
  { timestamps: true }
)
