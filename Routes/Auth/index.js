const express = require("express");
const router = express.Router();
const AuthRegister = require('./AuthRegister');
const AuthLogin = require('./AuthLogin')

router.get('/', (req, res) => res.send('Clear'));
router.post('/register', AuthRegister);
router.post('/login', AuthLogin);


module.exports = router;