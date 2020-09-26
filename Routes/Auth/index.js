const express = require("express");
const router = express.Router();
const AuthRegister = require('./AuthRegister');

router.get('/', (req, res) => res.send('Clear'));
router.post('/register', AuthRegister);

module.exports = router;