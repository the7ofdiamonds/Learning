const express = require('express');
const router = express.Router();

router.post('', (req, res, next) => {
  res.status(201).json({
    message: 'Handling POST request to /receipts'
  });
});

router.get('', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET request to /receipts'
  });
});

router.get('/:receipt_id', (req, res, next) => {
    res.status(200).json({
      message: 'Handling GET request to /:receipt_id'
    });
  });
  
module.exports = router;
