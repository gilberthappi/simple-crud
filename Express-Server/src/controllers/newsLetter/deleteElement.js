/* eslint-disable no-console */
/* eslint-disable radix */
const database = require('../../../Utils/mockDatabase.js');

function deleteOne(req, res) {
  const requestId = parseInt(req.params.id);
  const indexToDelete = database.findIndex((item) => item.id === requestId);
  if (indexToDelete !== -1) {
    database.splice(indexToDelete, 1);
    res.json({
      message: `Newsletter with ID ${requestId} is deleted`,
    });
  } else {
    res.status(404).json({
      error: `Newsletter with ID ${requestId} is not found`,
    });
  }
}

module.exports = deleteOne;