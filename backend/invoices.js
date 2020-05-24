const express = require('express');
const router = express.Router();

router.post('', (req, res, next) => {
  res.status(201).json({
    message: 'Handling POST request to /invoices'
  });
});

router.get('', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET request to /invoices'
  });
});

router.get('/:invoice_id', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET request to /:invoice_id'
  });
});

router.patch('/:invoice_id', (req, res, next) => {
  res.status(201).json({
    message: 'Handling PATCH request to /:invoice_id'
  });
});

module.exports = router;
