/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
// /* eslint-disable radix */
// const database = require('../../../Utils/mockDatabase.js');

// function updatePartially(req, res) {
//   const requestId = parseInt(req.params.id);
//   const index = database.findIndex((item) => item.id === requestId);
//   const newOneElement = req.body;
//   if (index !== -1) {
//     database[index] = { ...database[index], ...newOneElement };
//     res.json({
//       message: `Newsletter with ID ${requestId} is updated`,
//     });
//   } else {
//     res.status(404).json({
//       error: `Newsletter with ID ${requestId} is not found`,
//     });
//   }
// }

// module.exports = updatePartially;

import { NewsLetter } from '../../models';

export const updatePartially = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await NewsLetter.findOneAndUpdate(id, req.body);
    if (!data) {
      return res.status(404).json({
        message: `can not find any product with ID ${id}`,
      });
    }
    const updatedData = await NewsLetter.findById(id);
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};