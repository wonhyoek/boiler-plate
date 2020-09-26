import express from "express";
import AuthRegister from './AuthRegister';
import AuthLogin from './AuthLogin';
import AuthLogout from "./AuthLogout";
import auth from "../../middleware/auth";

const router = express.Router();

router.get('/', auth, (req, res) => {
    res.json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image
    });
});
router.post('/register', AuthRegister);
router.post('/login', AuthLogin);
router.get('/logout', auth, AuthLogout);


export default router;