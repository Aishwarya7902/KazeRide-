const express=require('express');
const router=express.Router();
const authMiddleware=require('../middlewares/auth.middleware')
const mapController=require('../controllers/map.controller')

router.get('/get-coordinates',authMiddleware.authUser,mapController.getCoordinates)
module.exports = router;