var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');
var checkToken = require('../check-token');

// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);

// GET specify token check with checkToken.js class and find user by auth controller
router.get('/auth/token', checkToken, auth_controller.user_token);

// POST request for login information
router.post('/auth/login', auth_controller.user_login);

// GET call the logout method
router.get('/auth/logout', auth_controller.user_logout);

module.exports = router;