const errorHandler = (err, req, res, next) => {
  console.log("err", err);
  res
    .status(err.statusCode || 500)
    .json({ success: false, error: err.message || "server error" });
};

module.exports = errorHandler;