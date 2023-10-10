/* eslint-disable import/extensions */
// const express = require('express');

// const newsLetterRouter = express.Router();
// const getOneLetter = require('../controllers/newsLetter/getOneElement.js');
// const getAll = require('../controllers/newsLetter/getAllElements.js');
// const createOne = require('../controllers/newsLetter/addNewElement.js');
// const updateElement = require('../controllers/newsLetter/updateEntireElement.js');
// const updatePartially = require('../controllers/newsLetter/updatePartOfElement.js');
// const deleteOne = require('../controllers/newsLetter/deleteElement.js');

// newsLetterRouter.get('/getAllElement', getAll);
// newsLetterRouter.get('/getOneElement/:id', getOneLetter);
// newsLetterRouter.post('/createNewElement', createOne);
// newsLetterRouter.put('/updateEntireElement/:id', updateElement);
// newsLetterRouter.patch('/updatePartiallyElement/:id', updatePartially);
// newsLetterRouter.delete('/deleteElement/:id', deleteOne);

// module.exports = newsLetterRouter;
/* eslint-disable import/extensions */
import express from 'express';

import {
  getAll, getOneLetter, createOne, updateElement,
  deleteOne, findOne, findAll, deleteAll, updatePartially,
} from '../controllers/newsLetter';

const newsLetterRouter = express.Router();

newsLetterRouter.get('/all', getAll);

newsLetterRouter.post('/addNew', createOne);

newsLetterRouter.get('/getOneElement/:id', getOneLetter);

newsLetterRouter.get('/findAll/:id', findAll);

newsLetterRouter.put('/updateEntireElement/:id', updateElement);

newsLetterRouter.patch('/updatePartiallyElement/:id', updatePartially);

newsLetterRouter.delete('/deleteOne/:id', deleteOne);

newsLetterRouter.delete('/deleteAll/:id', deleteAll);

newsLetterRouter.get('/findOne/:title', findOne);

export default newsLetterRouter;