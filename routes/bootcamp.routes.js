const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req);
  res.status(200).send({ success: true, msg: "send all bootcamps" });
});

router.get("/:id", (req, res) => {
  res
    .status(200)
    .send({ success: true, msg: `Get single bootcamp ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.status(200).send({ success: true, msg: "post a new bootcamp" });
});

router.put("/:id", (req, res) => {
  res
    .status(200)
    .send({ success: true, msg: `Update single bootcamp ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res
    .status(200)
    .send({ success: true, msg: `Delete single bootcamp ${req.params.id}` });
});

module.exports = router;
