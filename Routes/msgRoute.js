const express = require('express');
const router = express.Router();
const loanController = require('../app/Controllers/msgController');

router.post('/addMessage', loanController.createMessage);
router.get('/getMessage', loanController.getAllMessage);

module.exports = router;