const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/registry', controllers.getRegistry)

router.get('/registry/:regid', controllers.getRegistryById)

router.get('/category/:id', controllers.getCategoryById)

router.get('/category/:id/items', controllers.getItemsByCategoryId)

router.post('/receipt', controllers.createReceipt)

router.get('/receipt/', controllers.getReceipts)

router.get('/receipt/:rId', controllers.getReceiptbyId)

router.get('/item/:id', controllers.getItemById)

module.exports = router
