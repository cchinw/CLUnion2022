const { Schema } = require('mongoose')

const Category = new Schema(
  {
    title: { type: String, required: true },
    items: [{ type: Schema.Types.ObjectId, ref: 'Item', required: true }]
  },
  { timestamps: true }
)

module.exports = Category
