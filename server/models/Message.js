const { Schema } = require('mongoose')

const Message = new Schema(
  {
    image: { type: String },
    msg: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Message
