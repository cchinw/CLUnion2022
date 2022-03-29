const db = require('../db')
const { Item, Cart, Checkout, Registry, Receipt } = require('../models')
const { checkout } = require('../routes')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const item1 = await new Item({
    image:
      'https://cb.scene7.com/is/image/Crate/EmmyFloorMirrorBrassSSF21/$web_pdp_main_carousel_med$/210427132016/emmy-brass-floor-mirror.jpg',
    title: 'Emmy Brass Floor Mirror',
    description:
      'Straight from the Middle Ages to your modern home, our Emmy floor mirror reimagines the classic Tudor arch. Also called a four-centered arch, this elegant shape adds subtle architectural interest to the floor mirror`s clean-lined frame of brass-finished iron. Grandly scaled, our exclusive Emmy brass floor mirror leans against the wall to create room-defining drama as well as add light-reflecting brightness to any space.',
    price: 849.0,
    quantityRemaining: 1
  })
  await item1.save()

  const cart = await new Cart({
    items: [item1._id],
    title: 'Chinwendu & Lekan`s Wedding WishList',
    quantitySelected: 0,
    reservedStatus: false
  })
  await cart.save()

  const checkout = await new Checkout({
    items: [cart._id],
    title: 'Checkout your gift items',
    totalCost: 0,
    email: '',
    giftMessage: '',
    paymentDetails: 0,
    name: '',
    address: '',
    phoneNumber: '',
    purchasedStatus: false
  })
  await checkout.save()

  const receipt = await new Receipt({
    items: [checkout._id],
    totalCost: checkout.totalCost,
    date: Date,
    purchasedStatus: 'true',
    purchasedFrom: [item1._id]
  })

  const weddingRegistry = await new Registry({
    greeting:
      'Your presence, thoughts, well wishes, and prayers for our wedding and marriage is appreciated above all. If you`ll like to give us a gift, we are grateful and appreciate your generosity. Love, C&L',
    title: 'Wish List',
    cart: [cart._id],
    quantityLeft: [checkout._id],
    receipt: [receipt._id]
  })
  await weddingRegistry.save()
}

run()
