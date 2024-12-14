const express = require('express');
const { createContact, updateContactStatus, getContacts } = require('../controllers/contactController');
const { authenticate, authorizeAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();


router.post('/', createContact);
router.get('/',  authenticate() , authorizeAdmin() ,  getContacts);
router.patch('/:id/status',  authenticate() , authorizeAdmin() ,  updateContactStatus);

module.exports = router;
