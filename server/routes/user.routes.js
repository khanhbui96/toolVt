const router = require('express').Router();
const passport =require('passport')
const userValidates = require('../middlewares/validates/login.validates');
const userControllers =  require('../controllers/user.controllers')


router.post('/login', userValidates.login, userControllers.login);
router.post('/register', userValidates.register, userControllers.register);
router.get('/getCurrentUser',passport.authenticate('jwt', {session: false}) , userControllers.getCurrentUser);



module.exports = router;

