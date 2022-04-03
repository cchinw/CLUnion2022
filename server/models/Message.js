const { Schema } = require('mongoose')

const Message = new Schema(
  {
    msg: [{ type: String, required: false }]
  },
  { timestamps: true }
)

module.exports = Message
