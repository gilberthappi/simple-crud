/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
const express = require('express');

const myLogger = function myLogger(req, res, next) {
  console.log(req.body);
  next();
};

module.exports = myLogger;