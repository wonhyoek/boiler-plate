const User = require('../../Models/User')

module.exports = (req, res) => {
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if(err){
            console.log(err);
            res.json({success: false, err})
        }
        return res.json({success: true})
    })
}