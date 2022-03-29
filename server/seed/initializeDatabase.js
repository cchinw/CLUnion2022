const db = require('../db')
const { Item, Registry } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const item1 = await new Item({
    image:
      'https://cb.scene7.com/is/image/Crate/EmmyFloorMirrorBrassSSF21/$web_pdp_main_carousel_med$/210427132016/emmy-brass-floor-mirror.jpg',
    title: 'Emmy Brass Floor Mirror',
    description:
      'Straight from the Middle Ages to your modern home, our Emmy floor mirror reimagines the classic Tudor arch. Also called a four-centered arch, this elegant shape adds subtle architectural interest to the floor mirror`s clean-lined frame of brass-finished iron. Grandly scaled, our exclusive Emmy brass floor mirror leans against the wall to create room-defining drama as well as add light-reflecting brightness to any space.',
    price: 849,
    quantityRemaining: 1
  })
  await item1.save()

  const weddingRegistry = await new Registry({
    greeting:
      'Your presence, thoughts, well wishes, and prayers for our wedding and marriage is appreciated above all. If you`ll like to give us a gift, we are grateful and appreciate your generosity. Love, C&L',
    title: 'Wish List',
    quantityLeft: [item1._id]
  })
  await weddingRegistry.save()

  console.log('Registry Initialized')
}

const run = async () => {
  await Item.deleteMany()
  await Registry.deleteMany()
  await main()
  db.close()
}

run()
