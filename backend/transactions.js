const express = require('express');
const router = express.Router();

router.post('', (req, res, next) => {

  const transaction = {
    timestamp: req.body.timestamp,
    from: req.body.from,
    to: req.body.to,
    amount: req.body.amount,
    fee: req.body.fee,
    total: req.body.total,
    last_transaction_id: req.body.last_transaction_id
  };
  const hash = '9876543210';
  const db = admin.firestore();


  return db.collection('transactions')
    .doc(hash)
    .set({
      timestamp: req.body.timestamp,
      from: req.body.from,
      to: req.body.to,
      amount: req.body.amount,
      fee: req.body.fee,
      total: req.body.total,
      last_transaction_id: req.body.last_transaction_id
    }).then(
      res.status(200).json({
        "message": 'POST request to /transactions',
        "saved": transaction
      })
    ).catch((error) => {
      console.log(error.message)
    })
});

module.exports = router;
