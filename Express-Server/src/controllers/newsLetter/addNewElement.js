const database = require('../../../Utils/mockDatabase.js');

function createOne(req, res) {
  const newElement = req.body;
  database.push(newElement);
  res.json(newElement);
}

module.exports = createOne;