// const database = require('../../../Utils/mockDatabase.js');

// function deleteOne(req, res) {
//   const requestId = parseInt(req.params.id);
//   const indexToDelete = database.findIndex((item) => item.id === requestId);
//   if (indexToDelete !== -1) {
//     database.splice(indexToDelete, 1);
//     res.json({
//       message: `Newsletter with ID ${requestId} is deleted`,
//     });
//   } else {
//     res.status(404).json({
//       error: `Newsletter with ID ${requestId} is not found`,
//     });
//   }
// }

// module.exports = deleteOne;

import { NewsLetter } from '../../models';

export const deleteOne = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await NewsLetter.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).json({ message: `cannot find any element with ID ${id}` });
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};