/* eslint-disable no-console */ /* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
// const database = require('../../../Utils/mockDatabase.js');

// function createOne(req, res) {
//   const newElement = req.body;
//   database.push(newElement);
//   res.json(newElement);
// }

// module.exports = createOne;

import { NewsLetter } from '../../models';

export const createOne = async (req, res) => {
  try {
    const letter = await NewsLetter.create(req.body);
    res.status(200).json(letter);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }

  res.status(201).json({
    message: 'New element created',
  });
};