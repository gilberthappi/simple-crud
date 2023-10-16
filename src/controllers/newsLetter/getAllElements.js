// const database = require('../../../Utils/mockDatabase.js');

// function getAll(req, res) {
//   res.status(200).json(database);
// }

// module.exports = getAll;

import { NewsLetter } from '../../models';

export const getAll = async (req, res) => {
  try {
    const data = await NewsLetter.find({});
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};