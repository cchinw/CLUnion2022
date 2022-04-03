const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

// router.get('/', (req, res) => res.send('Welcome to our wedding website!'))

router.get('/registry', controllers.getRegistry)

router.get('/registry/:regid', controllers.getRegistryById)

router.get('/item', controllers.getItem)

router.get('/item/:id', controllers.getItemById)

router.put('/checkout/', controllers.addToCheckout)

router.put('/checkout/:id', controllers.removeFromCheckout)

router.get('/checkout', controllers.showCheckout)

router.get('/category/:id', controllers.getCategoryById)

router.get('/category/:id/items', controllers.getItemsByCategoryId)

router.post('/receipt', controllers.createReceipt)

router.get('/receipt/', controllers.getReceipts)

router.get('/receipt/:rId', controllers.getReceiptbyId)

router.post('/message', controllers.createMessage)

router.get('/message', controllers.getMessage)

router.get('/message/:msgId', controllers.getMessageById)

router.put('/message/:msgId', controllers.updateMessage)

router.delete('/message/:msgId', controllers.deleteMessage)

module.exports = router
