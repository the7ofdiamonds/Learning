const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const getRoutes = require('./get')
const postRoutes = require('./post')
const invoicesRoutes = require('./invoices')
const paymentsRoutes = require('./payments')
const pendingTransactionsRoutes = require('./pending_transactions')
const receiptsRoutes = require('./receipts')


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use('', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Autherization");
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({})
  }
  next();
});
app.use(getRoutes);
app.use(postRoutes);
app.use('/user/:user_id/platform/:platform/currency/:currensy/invoices', invoicesRoutes);
app.use('/user/:user_id/platform/:platform/currency/:currensy/accounts/:account_id/payments', paymentsRoutes);
app.use('/user/:user_id/platform/:platform/currency/:currensy/accounts/:account_id/pending_transactions', pendingTransactionsRoutes);
app.use('/user/:user_id/platform/:platform/currency/:currensy/receipts', receiptsRoutes);
app.use('', (req, res, next) => {
  res.status(200).json({
    message: 'This is where you can login'
  });
});
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});
module.exports = app;
