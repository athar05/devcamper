const express = require("express");
const dotenv = require("dotenv");
const bootcamp = require("./routes/bootcamp.routes");

//load env variables
dotenv.config({ path: "./config/config.env" });

const app = express();

app.use("/api/v1/bootcamps", bootcamp);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
