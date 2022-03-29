const db = require('../db')
const { Item, Cart, Registry } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {}

run()
