const express = require('express');
const router = express.Router();
const { signup, signin, testget } = require('../controllers/auth');


//router.post(path, what do do)
//"what to do" can me imported or function (req, res) {}
router.post('/signup', signup);
router.post('/signin', signin);
router.get('/testget', testget);


module.exports = router;