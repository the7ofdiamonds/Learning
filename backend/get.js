const express = require('express');
const router = express.Router();

router.get('/user/:user_id/platform/:platform/currency', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET request to /currency'
  });
});
router.get('/user/:user_id/platform/:platform/currency/:currensy', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET request to /currency/:currency'
  });
});

router.get('/user/:user_id/platform/:platform/currency/:currensy/accounts', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET request to /accounts'
  });
});

router.get('/user/:user_id/platform/:platform/currency/:currensy/accounts/:account_id', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET request to /accounts/:account_id'
  });
});

router.get('/user/:user_id/platform/:platform/currency/:currensy/accounts/:account_id/transactions', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET request to /transactions'
  });
});

router.get('/user/:user_id/platform/:platform/currency/:currensy/accounts/:accounts_id/transactions/:transaction_id', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET request to /transactions/:transaction_id'
  });
});

module.exports = router;
