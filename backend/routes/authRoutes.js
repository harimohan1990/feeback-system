const express = require('express');
const { registerUser, authUser, getUserProfile } = require('../controllers/authController');
const { check } = require('express-validator');
const { protect, roleMiddleware } = require('../middleware/roleMiddleware');

const router = express.Router();

router.post(
    '/register',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
    ],
    registerUser
);

router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);
router.get('/admin', protect, roleMiddleware('admin'), (req, res) => {
    res.send('Admin access');
});

module.exports = router;
