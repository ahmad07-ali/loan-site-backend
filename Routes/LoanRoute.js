const express = require('express');
const router = express.Router();
const loanController = require('../app/Controllers/loanController');

router.post('/addApplication', loanController.createLoanApplication);
router.get('/getApplications', loanController.getAllLoanApplications);

module.exports = router;