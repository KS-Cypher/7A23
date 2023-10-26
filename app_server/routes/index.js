var express = require('express');
var router = express.Router();
var ctrllocation = require('../controller/location');
var ctrlothers = require('../controller/others');
require ('dotenv').config();
/*Location page*/

router.get('/',ctrllocation.homelist);
router.get('/location',ctrllocation.locationInfo);
router.get('/locationc',ctrllocation.locationInfo1);
router.get('/locationb',ctrllocation.locationInfo2);
router.get('/location/review/new',ctrllocation.addReview);

/*other pages*/
router.get('/about',ctrlothers.about);
router.get('/signin',ctrlothers.signin);
router.get('/register',ctrlothers.register);

module.exports=router;