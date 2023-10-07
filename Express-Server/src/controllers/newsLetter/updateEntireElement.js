/* eslint-disable no-console */
/* eslint-disable radix */
const database = require('../../../Utils/mockDatabase.js');

function updateElement(req, res) {
  const requestId = parseInt(req.params.id);
  const newElement = req.body;
  const index = database.findIndex((item) => item.id === requestId);

  console.log('Request ID:', requestId);
  console.log('New Element:', newElement);
  console.log('Database before update:', database);

  if (index !== -1) {
    database[index] = { ...database[index], ...newElement };
    console.log('Database after update:', database);
    res.json({
      message: `Newsletter with ID ${requestId} is updated`,
    });
  } else {
    res.status(404).json({
      error: `Newsletter with ID ${requestId} is not found`,
    });
  }
}

module.exports = updateElement;