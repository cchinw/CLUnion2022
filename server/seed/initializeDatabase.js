const db = require('../db')
const { Item, Category, Registry, Checkout, Message } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  // Furniture Registry Starts Here

  const itemFurniture1 = await new Item({
    image:
      'https://cb.scene7.com/is/image/Crate/EmmyFloorMirrorBrassSSF21/$web_pdp_main_carousel_med$/210427132016/emmy-brass-floor-mirror.jpg',
    title: 'Emmy Brass Floor Mirror',
    description:
      'Straight from the Middle Ages to your modern home, our Emmy floor mirror reimagines the classic Tudor arch. Also called a four-centered arch, this elegant shape adds subtle architectural interest to the floor mirror`s clean-lined frame of brass-finished iron. Grandly scaled, our exclusive Emmy brass floor mirror leans against the wall to create room-defining drama as well as add light-reflecting brightness to any space.',
    price: '$849',
    quantityNeeded: 1,
    Link: 'https://www.crateandbarrel.com/emmy-brass-floor-mirror/s226067?a=784&campaignid=12425629802&adgroupid=116938618783&targetid=aud-1639123763490:dsa-606786184791&adpos=&creative=589501195664&device=c&matchtype=&network=g&gclsrc=aw.ds&gclid=CjwKCAjwrqqSBhBbEiwAlQeqGlj0k7xBezTHixlCaudQKxNS7kQCws17yRqXopc04JZVQmrC7TyOfBoC73kQAvD_BwE'
  })
  await itemFurniture1.save()

  const itemFurniture2 = await new Item({
    image:
      'https://cb.scene7.com/is/image/Crate/TwistDeskOysterSOSSS22/$web_pdp_main_carousel_med$/211026094333/twist-desk-oyster.jpg',
    title: 'Twist Ash Rotating Desk',
    description:
      "Our amazingly versatile Twist desk pivots on a round hub to serve a variety of functions. In its compact form, the table surfaces nest to create an office desk. Expanded, they part to become an expansive executive desk or angle as a corner desk. In fact, the desk rotates a full 360 degrees, creating any number of configurations to suit your space. The drum-shaped hub has an integrated door that opens to a fixed shelf for storage. Made of ash veneer, the expandable desk is given a whitewash finish to bring out the wood's dynamic grain. A bold approach to home office decor, the Twist desk is a Crate & Barrel exclusive. By choosing FSC ??-certified furniture, you are supporting responsible management of the world's forests.",
    price: '$1799',
    quantityNeeded: 1,
    Link: 'https://www.crateandbarrel.com/twist-ash-rotating-desk/s423037?a=784&campaignid=12425629655&adgroupid=116938613703&targetid=aud-1639123763490:dsa-410830315572&adpos=&creative=589501195613&device=c&matchtype=&network=g&gclsrc=aw.ds&gclid=CjwKCAjwrqqSBhBbEiwAlQeqGiSVwI7HPsyzXafklM5HzuQBI7IKZ_IE9K7Cl81LXU27wxQUdpqejRoCSqEQAvD_BwE'
  })
  await itemFurniture2.save()

  const furnitureCategory = await new Category({
    title: 'Furniture Category',
    items: [itemFurniture1._id, itemFurniture2._id]
  })
  await furnitureCategory.save()

  const furnitureRegistry = await new Registry({
    image:
      'https://img1.homary.com/filters:format(webp)/mall/file/2021/06/01/9a87fc0d24474048bc18ba46b194f05f.jpg',
    greeting:
      'Your presence, thoughts, well wishes, and prayers for our wedding and marriage is appreciated above all. If you`ll like to give us a gift, we are grateful and appreciate your generosity. Love, C&L',
    title: 'Furniture Registry',
    itemsLeft: furnitureCategory.items.length,
    category: furnitureCategory._id
  })
  await furnitureRegistry.save()

  console.log('Furniture Registry Initialized')

  // Home Decor Registry Starts Here

  const itemHomeDecor1 = await new Item({
    image:
      'https://cb.scene7.com/is/image/Crate/AdraVasesFSSS22/$web_pdp_main_carousel_med$/211008123727/adra-vases.jpg',
    title: 'Adra Vase',
    description:
      'Bright white glaze brings the deeply etched chevron pattern of our Adra vases into crisp focus, pairing bold pattern to colorful bouquets. The graceful bottle-shaped vases display their artisanal roots in their hand-carved designs, while darker rims and bases add rustic contrast. Use with fresh flowers, dried botanicals or one of our lifelike faux floral sprays.',
    price: '$100',
    quantityNeeded: 2,
    Link: 'https://www.crateandbarrel.com/adra-vases/f49749'
  })
  await itemHomeDecor1.save()

  const itemHomeDecor2 = await new Item({
    image:
      'https://cb.scene7.com/is/image/Crate/MayaPrintSSS22/$web_pdp_main_carousel_med$/211008123712/maya-print.jpg',
    title: 'Maya Print',
    description:
      "Michel Smith Boyd defies expectations in this dramatically cropped portrait. Almost monochromatic in palette, the painting lures the eye to the sensuous curves of the sitter's neck, the sweeping contours of the cheekbones and the graceful folds and woven texture of the headscarf. Our gicl??e print of the original acrylic painting is reproduced on canvas and finished with an acrylic gel for added texture.",
    price: '$999',
    quantityNeeded: 1,
    Link: 'https://www.crateandbarrel.com/maya-print/s473906?st=Maya%20Print'
  })
  await itemHomeDecor2.save()

  const HomeDecorCategory = await new Category({
    title: 'Home Decor Category',
    items: [itemHomeDecor1._id, itemHomeDecor2._id]
  })
  await HomeDecorCategory.save()

  const HomeDecorRegistry = await new Registry({
    image:
      'https://i.pinimg.com/564x/43/2a/bc/432abcf00a224af48ad6795fb97de45d.jpg',
    greeting:
      'Your presence, thoughts, well wishes, and prayers for our wedding and marriage is appreciated above all. If you`ll like to give us a gift, we are grateful and appreciate your generosity. Love, C&L',
    title: 'Home Decor Registry',
    itemsLeft: HomeDecorCategory.items.length,
    category: HomeDecorCategory._id
  })
  await HomeDecorRegistry.save()

  // Kitchen Registry Starts Here
  const KitchenItem1 = await new Item({
    image:
      'https://cb.scene7.com/is/image/Crate/SmegAutoEspressoSSS21/$web_pdp_main_carousel_med$/210603134449/smeg-automatic-espresso.jpg',
    title:
      'Smeg Matte White Fully Automatic Coffee and Espresso Machine with Milk Frother',
    description:
      "Retro style meets modern tech in our espresso maker from Smeg. With its charming rounded corners, mix of metals matte white finish made exclusively for Crate & Barrel, this machine brings delicious espresso drinks and charming style to your kitchen. Add your favorite beans to the adjustable conical burr grinder, and choose from one of the six pre-programmed beverages. If desired, use the stainless steel steam wand to create luxurious lattes, mochas and more. Known for its wonderfully retro refrigerators, Smeg has created a joyfully designed kitchen appliance collection based on the compact, curved lines of postwar design. Smeg's nod to the past is the star of today's kitchen, incorporating all the current advances in technology while celebrating vintage aesthetics.",
    price: '$999',
    quantityNeeded: 1,
    Link: 'https://www.crateandbarrel.com/smeg-matte-white-fully-automatic-coffee-and-espresso-machine-with-milk-frother/s268317'
  })
  await KitchenItem1.save()

  const KitchenItem2 = await new Item({
    image:
      'https://cb.scene7.com/is/image/Crate/GreenPanRsrvStTaupeSSF21_VND/$web_pdp_main_carousel_med$/211117102304/greenpan-reserve-taupe-10-piece-non-stick-cookware-set.jpg',
    title: 'GreenPan ??? Reserve Taupe 10-Piece Non-Stick Cookware Set',
    description:
      'This GreenPan Reserve cookware set infuses world-class technology with modern, minimalist style. Matte gold handles adorn the sleek pans, contrasting with the creamy taupe finish and adding serious glam. Constructed with duo-forged, hard-anodized aluminum, the pans provide even heat distribution and superior performance. The diamond-infused Thermolon ceramic surface offers healthy cooking as well as easy release and clean up. The pans resist high heat and will not release toxic fumes, and the non-stick coating will not blister or peel. A fantastic wedding, graduation or housewarming gift, this 10-piece cookware set in taupe consists of an 8-inch frying pan, 11-inch frying pan, 2- and 3-quart saucepans with lids, 3.2-quart saut?? pan with lid and 5-quart stockpot with lid.',
    price: '$399',
    quantityNeeded: 1,
    Link: 'https://www.crateandbarrel.com/greenpan-reserve-taupe-10-piece-non-stick-cookware-set/s555190?st=GreenPan%20%e2%84%a2%20Reserve%20Taupe%2010-Piece%20Non-Stick%20Cookware%20Set'
  })
  await KitchenItem2.save()

  const KitchenCategory = await new Category({
    title: 'Kitchen Category',
    items: [KitchenItem1._id, KitchenItem2._id]
  })
  await KitchenCategory.save()

  const KitchenRegistry = await new Registry({
    image:
      'https://www.mydomaine.com/thmb/c13ZBFZ20sxlZy3NJOaDeq3khJI=/712x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/small-white-kitchen-design-ideas-15-house-of-chais-ig-973460c047b74943a8b250d09048032d.png',
    greeting:
      'Your presence, thoughts, well wishes, and prayers for our wedding and marriage is appreciated above all. If you`ll like to give us a gift, we are grateful and appreciate your generosity. Love, C&L',
    title: 'Kitchen Registry',
    itemsLeft: KitchenCategory.items.length,
    category: KitchenCategory._id
  })
  await KitchenRegistry.save()

  const checkout = await new Checkout({})
  await checkout.save()

  const msg = await new Message({
    image:
      'https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/277659964_10227524588638258_2009064567405745035_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=mk0-tPsjIOAAX-W35k0&_nc_ht=scontent-iad3-1.xx&oh=00_AT_i1h-FHd1hVcweXLoT21RuXM3Pl0x-Dz7acBRavkgRkw&oe=624DDB50',
    msg: 'I wish you all the joy and happiness - Nini'
  })
  await msg.save()
}

const run = async () => {
  await Item.deleteMany()
  await Category.deleteMany()
  await Registry.deleteMany()
  await Checkout.deleteMany()
  await Message.deleteMany()
  await main()
  db.close()
}

run()
