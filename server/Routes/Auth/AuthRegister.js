import User from "../../Models/User";
import bcrypt from "bcrypt";

const saltRounds = 10;

const Register = async (req, res) => {
    try {
        const salt = await bcrypt.genSaltSync(saltRounds);
        const hash = await bcrypt.hashSync(req.body.password, salt);
        const user = new User({
            name: req.body.name,
            password: hash,
            email: req.body.email
        });
        await user.save();
        return res.json({success: true});
    } catch (e) {
        console.log(e);
    }
}

export default Register;