const express = require('express');

const newsLetterRouter = express.Router();
const getOneLetter = require('../controllers/newsLetter/getOneElement.js');
const getAll = require('../controllers/newsLetter/getAllElements.js');
const createOne = require('../controllers/newsLetter/addNewElement.js');
const updateElement = require('../controllers/newsLetter/updateEntireElement.js');
const updatePartially = require('../controllers/newsLetter/updatePartOfElement.js');
const deleteOne = require('../controllers/newsLetter/deleteElement.js');

newsLetterRouter.get('/getAllElement', getAll);
newsLetterRouter.get('/getOneElement/:id', getOneLetter);
newsLetterRouter.post('/createNewElement', createOne);
newsLetterRouter.put('/updateEntireElement/:id', updateElement);
newsLetterRouter.patch('/updatePartiallyElement/:id', updatePartially);
newsLetterRouter.delete('/deleteElement/:id', deleteOne);

module.exports = newsLetterRouter;