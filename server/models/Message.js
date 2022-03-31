const { Schema } = require('mongoose')

const Message = new Schema(
  {
    Message: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Message
