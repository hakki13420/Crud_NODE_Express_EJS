const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    addProduct,
    editProduct,
    removeProduct
}= require('../controllers/index')


//home
router.get('/', (req, res, next) => {    
    res.render('index');
})

//products
router.get('/products',getAllProducts)


//add new product
router.post('/add-product',addProduct)

//edit product
router.get('/editProduct',editProduct)

//remove product
router.get('/removeProduct',removeProduct)

module.exports = router;