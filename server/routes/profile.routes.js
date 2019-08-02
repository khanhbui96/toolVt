const router = require('express').Router();
const passport = require('passport');
const profileController = require('../controllers/profile.controllers'); 

router.post('/create',passport.authenticate('jwt', {session: false}), profileController.create);
router.get('/getAllProfiles', passport.authenticate('jwt', {session: false}),profileController.getAllProfiles)
router.get('/:id', passport.authenticate('jwt', {session: false}),profileController.getProfileById)
module.exports = router