const { Schema } = require('mongoose')

const Message = new Schema(
  {
    Message: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Message
