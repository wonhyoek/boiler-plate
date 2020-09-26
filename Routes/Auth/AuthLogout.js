import User from "../../Models/User";

export default async (req, res) => {
    User.findOneAndUpdate(
        {_id: req.user._id},
        { token: ""},
        (err, user) => {
            if(err){
                console.log(err);
            }
            res.send({success: true})
        }                   
    )
}