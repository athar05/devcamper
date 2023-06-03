exports.getBootcamps = (req, res, next) => {
  res.status(200).send({ success: true, msg: "send all bootcamps" });
};

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .send({ success: true, msg: `Get single bootcamp ${req.params.id}` });
};

exports.createBootcamp = (req, res, next) => {
  res.status(200).send({ success: true, msg: "post a new bootcamp" });
};

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .send({ success: true, msg: `Update single bootcamp ${req.params.id}` });
};

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .send({ success: true, msg: `Delete single bootcamp ${req.params.id}` });
};
