const router = require('express').Router();
const passport = require('passport');
const timeController = require('../controllers/time.controllers'); 

router.post('/create',passport.authenticate('jwt', {session: false}), timeController.create);
module.exports = router