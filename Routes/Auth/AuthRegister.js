const User = require('../../Models/User');
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        const user = new User({
            name: req.body.name,
            password: hash,
            email: req.body.email
        });
        user.save((err, userInfo) => {
            if(err){
                console.log(err);
                res.json({success: false, err})
            }
            return res.json({success: true})
        })
    });
    
}