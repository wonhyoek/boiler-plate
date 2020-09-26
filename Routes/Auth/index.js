import express from "express";
import AuthRegister from './AuthRegister';
import AuthLogin from './AuthLogin';

const router = express.Router();

router.get('/', (req, res) => res.send('Clear'));
router.post('/register', AuthRegister);
router.post('/login', AuthLogin);


export default router;