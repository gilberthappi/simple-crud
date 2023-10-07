/* eslint-disable radix */
const database = require('../../../Utils/mockDatabase.js');

function updatePartially(req, res) {
  const requestId = parseInt(req.params.id);
  const index = database.findIndex((item) => item.id === requestId);
  const newOneElement = req.body;
  if (index !== -1) {
    database[index] = { ...database[index], ...newOneElement };
    res.json({
      message: `Newsletter with ID ${requestId} is updated`,
    });
  } else {
    res.status(404).json({
      error: `Newsletter with ID ${requestId} is not found`,
    });
  }
}

module.exports = updatePartially;