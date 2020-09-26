import bcrypt from "bcrypt";
import User from '../../Models/User';
import jwt from 'jsonwebtoken';

const Login = async (req, res) => {
   try{
        const user = await User.findOne({email: req.body.email});

        if(!user){
            console.log('No User Exists');
            return res.json({success: false, err});
        }

        const comparePassword = await bcrypt.compareSync(req.body.password, user.password);

        if(!comparePassword){
            console.log('Unvalid Password');
            return res.json({success: false, err})
        } else {
            const token = await jwt.sign(user._id.toHexString(), 'secretKey');
            user.token = token;
            await user.save();
            return res.cookie("x_auth", user.token)
                    .json({success: true, userId: user._id});
        }
   } catch(e){
        console.log(e);
   }
}

export default Login;