/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
// /* eslint-disable radix */
// /* eslint-disable no-console */
// const express = require('express');
// // eslint-disable-next-line import/no-extraneous-dependencies
// const bodyParser = require('body-parser');
// const myLogger = require('./src/middleware/logger.js');
// const newsLetterRouter = require('./src/routes/newsLetter.js');

// const app = express();
// app.use(myLogger);
// app.use(bodyParser.json());
// app.use('/newsLetter', newsLetterRouter);
// const PORT = 1500;

// // const database = [
// //   {
// //     id: 1,
// //     title: 'Fuel Prices have increased',
// //     body: 'RURA has announced that effective of 4th October prices will increases',
// //   },
// //   {
// //     id: 2,
// //     title: 'book launch',
// //     body: 'The book launch will take place on 4th October 2021 at Kigali Convention Center',
// //   },
// //   {
// //     id: 3,
// //     title: 'New Covid 19 measures',
// //     body: 'The government has announced new measures to fight Covid 19',
// //   },
// // ];

// // app.get('/', (req, res) => {
// //   res.json(database);
// // });

// // app.post('/', (req, res) => {
// //   console.log(req.body);
// //   database.push(req.body);
// //   res.status(201).json({
// //     message: 'Newsletter created',
// //   });
// // });

// // app.get('/getOneLetter/:id', (req, res) => {
// //   const requestId = req.params.id;
// //   const data = database.find((item) => item.id === requestId);
// //   console.log(data);

// //   res.json(data);
// // });

// // // app.put('/', (req, res) => {
// // //   res.send('Put request');
// // // });

// // app.put('/:id', (req, res) => {
// //   const requestId = parseInt(req.params.id);
// //   const updatedNewsletter = req.body;
// //   const index = database.findIndex((item) => item.id === requestId);
// //   if (index !== -1) {
// //     database[index] = { ...database[index], ...updatedNewsletter };
// //     res.json({
// //       message: `Newsletter with ID ${requestId} updated`,
// //     });
// //   } else {
// //     res.status(404).json({
// //       error: `Newsletter with ID ${requestId} not found`,
// //     });
// //   }
// // });
// // // app.patch('/', (req, res) => {
// // //   console.log(req.body);
// // //   res.send('Patch request');
// // // });

// // app.patch('/:id', (req, res) => {
// //   const requestId = parseInt(req.params.id);
// //   const partialUpdate = req.body;
// //   const index = database.findIndex((item) => item.id === requestId);
// //   if (index !== -1) {
// //     database[index] = { ...database[index], ...partialUpdate };
// //     res.json({
// //       message: `Newsletter with ID ${requestId} partially updated`,
// //     });
// //   } else {
// //     res.status(404).json({
// //       error: `Newsletter with ID ${requestId} not found`,
// //     });
// //   }
// // });

// // // app.delete('/', (req, res) => {
// // //   res.send('Delete method');
// // // });
// // app.delete('/:id', (req, res) => {
// //   const requestId = parseInt(req.params.id);
// //   const index = database.findIndex((item) => item.id === requestId);
// //   if (index !== -1) {
// //     database.splice(index, 3);
// //     res.json({
// //       message: `Newsletter with ID ${requestId} deleted`,
// //     });
// //   } else {
// //     res.status(404).json({
// //       error: `Newsletter with ID ${requestId} not found`,
// //     });
// //   }
// // });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// import appRouter from './src/routes';
import mainRouter from './src/routes';
// import { myLogger } from './src/middleware';
// import 'dotenv/config';
require('dotenv').config();

const app = express();

// app.use(myLogger);
app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: false }));
app.use('/api/v1', mainRouter);

const port = process.env.PORT || 6000;

const DB_CONNECTION_PROD = 'mongodb+srv://gdushimimana6:happi1234@cluster0.rpvr4bu.mongodb.net/?retryWrites=true&w=majority';
// // const data = 'mongodb+srv://gdushimimana6:happi1234@cluster0.rpvr4bu.mongodb.net/?retryWrites=true&w=majority';
// const DB_CONNECTION_DEV = 'mongodb://localhost:27017/';
// const data = process.env.DB_CONNECTION_PROD;
// console.log(data);

mongoose.connect(process.env.DB_CONNECTION_PROD).then((res) => {
  console.log('Database is connected');
});

app.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`);
});