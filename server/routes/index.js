const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/registry', controllers.getRegistry)

router.get('/cart', controllers.getCart)

router.get('/item/:id', controllers.getItemById)

// router.get('/cart', controllers.viewCart)

// // router.post('/registry/:id/checkout', controllers.Checkout)

// router.get('/receipt/:rId', controllers.getReceiptById)

// router.get('/guestbook', controllers.ViewGuestbook)

// // router.post('/guestbook/form', controllers.signGuestBook)

module.exports = router
