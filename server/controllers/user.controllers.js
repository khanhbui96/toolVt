const bcrypt = require('bcryptjs');
const User = require('../models/User.model');
const jwt = require('jsonwebtoken');
module.exports.login = (req, res)=>{
    
};
module.exports.register = (req, res)=>{
    const {email ,login, password} = req.body;
    const errs = {};
    User.findOne({email: email})
        .then(user=>{
            if(user){
                errs.email = 'Email was used!'
                res.status(404).json(errs)
            }
            bcrypt.genSalt(10)
                .then(salt=>{
                    bcrypt.hash(password, salt)
                        .then(hash=>{
                            const newUser = new User({
                                email,
                                login,
                                password: hash
                            });
                            newUser.save()
                                .then(newUser=>res.json(newUser))
                                .catch(err=>console.log(err))
                        })
                        .catch(err=>console.log(err))
                })
                .catch(err=>console.log(err))
        })
        .catch(err=>console.log(err))
};
module.exports.login = (req, res)=>{
    const {email, password} = req.body;
    const errs = {};
    User.findOne({email: email})
        .then(user=>{
            if(!user){
                errs.email = 'Email not found!'
                res.status(404).json(errs)
            };
            bcrypt.compare(password, user.password)
                .then(isMatch=>{
                    if(!isMatch){
                        errs.password = 'Wrong password!';
                        res.status(404).json(errs)
                    };
                    jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: '1d'}, function(err, token) {
                        if(err){console.log(err)};
                        res.json({
                            success: true,
                            token: token
                        })
                      })
                })
                .catch(err=>console.log(err))
            
        })
        .catch(err=>console.log(err))
    }