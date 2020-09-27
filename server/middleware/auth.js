import User from "../Models/User";
import jwt from "jsonwebtoken";

export default async (req, res, next) => {
    
    try {
        let token = req.cookies.x_auth;

        if(!token){
            return res.json({ isAuth: false, error: true});
        }

        const decoded = await jwt.verify(token, 'secretKey');
        const user = await User.findOne({_id: decoded, "token": token});

        if(!user){
            return res.json({ isAuth: false, error: true});
        } 
        req.user = user;
        req.token = token;
        next();
    } catch (e) {
        console.log(e);
    }

}