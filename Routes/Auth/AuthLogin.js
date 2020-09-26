const bcrypt = require('bcrypt');
const User = require('../../Models/User');
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if(err){
            console.log('No User Exist');
            return res.json({success: false, err})
        }
        bcrypt.compare(req.body.password, user.password, function(err, result) {
            if(!result){
                console.log('Not correct password');
                return res.json({success: false, err})
            } else {
                jwt.sign(user._id.toHexString(), 'secretKey', function(err, token) {
                    if(err){
                        console.log(err);
                        return res.json({success: false, err})
                    }
                    user.token = token;
                    user.save((err, user) => {
                        if(err){
                            console.log(err);
                            return res.json({success: false, err})
                        }
                        return res.json({success: true, token: user.token})
                    })
                });
            }
            
        });
    })
}