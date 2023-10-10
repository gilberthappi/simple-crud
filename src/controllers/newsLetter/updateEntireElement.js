/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
// /* eslint-disable no-console */
// /* eslint-disable radix */
// const database = require('../../../Utils/mockDatabase.js');

// function updateElement(req, res) {
//   const requestId = parseInt(req.params.id);
//   const newElement = req.body;
//   const index = database.findIndex((item) => item.id === requestId);

//   console.log('Request ID:', requestId);
//   console.log('New Element:', newElement);
//   console.log('Database before update:', database);

//   if (index !== -1) {
//     database[index] = { ...database[index], ...newElement };
//     console.log('Database after update:', database);
//     res.json({
//       message: `Newsletter with ID ${requestId} is updated`,
//     });
//   } else {
//     res.status(404).json({
//       error: `Newsletter with ID ${requestId} is not found`,
//     });
//   }
// }

// module.exports = updateElement;

import { NewsLetter } from '../../models';

export const updateElement = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await NewsLetter.findByIdAndUpdate(id, req.body);
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