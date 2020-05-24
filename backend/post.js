const express = require('express');
const router = express.Router();

router.post('/user/:user_id/platform/:platform/currency/:currensy/accounts', (req, res, next) => {
  res.status(201).json({
    message: 'Handling POST request to /accounts'
  });
});

router.post('/user/:user_id/platform/:platform/currency/:currensy/accounts/:account_id/transactions', (req, res, next) => {
  res.status(201).json({
    message: 'Handling POST request to /transactions'
  });
});

module.exports = router;
