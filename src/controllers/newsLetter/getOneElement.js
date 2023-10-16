// const database = require('../../../Utils/mockDatabase.js');

// function getOneLetter(req, res) {
//   const requestId = parseInt(req.params.id);
//   const oneElement = database.find((item) => item.id === requestId);
//   if (oneElement) {
//     res.status(200).json(oneElement);
//   } else {
//     res.status(404).json({ error: 'One Element not Found' });
//   }
// }

// module.exports = getOneLetter;
import { NewsLetter } from '../../models';

export const getOneLetter = async (req, res) => {
  try {
    const data = await NewsLetter.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};