const express=require('express');
const router=express.Router();
const {body,query}=require('express-validator')
const rideController=require('../controllers/ride.controller')
const authMiddleware=require("../middlewares/auth.middleware")

router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().isLength({min:3}).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid destination address'),
    body('vehicleType').isString().isIn(['auto','car','moto']).withMessage('Invalid vehicle type'),
    rideController.createRide

)

router.get('/get-fare',
    query('pickup').isString().isLength({min:3}).withMessage('Invalid Pickup'),
    query('destination').isString().isLength({min:3}).withMessage('Invalid destination'),
    authMiddleware.authUser,
    rideController.getFare
)

router.post('/confirm',
    authMiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    rideController.confirmRide

)
module.exports=router;
