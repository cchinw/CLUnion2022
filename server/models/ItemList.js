const { Schema } = require('mongoose')

const ItemList = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    items: [{ type: Schema.Types.ObjectId, ref: 'Item', required: true }]
  },
  { timestamps: true }
)

module.exports = ItemList
