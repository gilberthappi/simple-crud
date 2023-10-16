/* eslint-disable import/named */
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
import { verifyToken, isAdmin } from '../middleware';

import {
  getAll, getOneLetter, createOne, updateElement,
  deleteOne, findOne, findAll, deleteAll, updatePartially, addMany,
} from '../controllers/newsLetter';

const newsLetterRouter = express.Router();

newsLetterRouter.use(verifyToken);

newsLetterRouter.get('/all', getAll);

newsLetterRouter.get('/getOneElement/:id', getOneLetter);

newsLetterRouter.get('/findAll/:id', findAll);

newsLetterRouter.get('/findOne/:title', findOne);

newsLetterRouter.post('/addNew', createOne);

newsLetterRouter.post('/', isAdmin, createOne);

newsLetterRouter.post('/addMany', addMany);

newsLetterRouter.put('/updateEntireElement/:id', updateElement);

newsLetterRouter.patch('/updatePartiallyElement/:id', updatePartially);

newsLetterRouter.delete('/deleteOne/:id', deleteOne);

newsLetterRouter.delete('/deleteMany/:title', deleteAll);

export default newsLetterRouter;