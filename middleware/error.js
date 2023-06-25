const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  //doubt
  let error = { ...err };

  error.message = err.message;

  if (err.name === "CastError") {
    const message = `Resource not found with the ID: ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || "server error" });
};

module.exports = errorHandler;
