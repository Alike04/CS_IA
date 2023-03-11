const { validationResult } = require('express-validator');

const validationHandler = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({
      error: errors.array()[0].msg
    })
  }
}

module.exports = validationHandler;