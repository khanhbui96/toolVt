const router = require('express').Router();
const userValidates = require('../middlewares/validates/login.validates');
const userControllers =  require('../controllers/user.controllers')

router.post('/login', userValidates.login, userControllers.login);
router.post('/register', userValidates.register, userControllers.register);



module.exports = router;

