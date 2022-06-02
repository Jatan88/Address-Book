const express = require('express');
const router = express.Router();

const { signup, login, logout } = require('../controllers/userController');
const { addNewContact} = require('../controllers/newContact');
const { isLoggedIn } = require('../middlewares/user');
const { showContact } = require('../controllers/showContact');
const { searchContact } = require('../controllers/searchContact');
const { updateContact } = require('../controllers/updateContact');
const { deleteContact } = require('../controllers/deleteContact');



router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/logout').get(logout)
router.route('/contact').post(isLoggedIn,addNewContact);
router.route('/contact/search').get(isLoggedIn, searchContact);
router.route('/contact/:id').get(isLoggedIn, showContact);
router.route('/contact/:id').put(isLoggedIn, updateContact);
router.route('/contact/:id').delete(isLoggedIn, deleteContact);

module.exports = router;
