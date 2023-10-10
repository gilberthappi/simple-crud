/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
// const express = require('express');

// const myLogger = function myLogger(req, res, next) {
//   console.log(req.body);
//   next();
// };

// module.exports = myLogger;

export const myLogger = function (req, res, next) {
  console.log(req.body);
  next();
};