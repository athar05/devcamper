const express = require("express");
const dotenv = require("dotenv");
const bootcamp = require("./routes/bootcamp.routes");
const morgan = require("morgan");
const connectDB = require("./config/db");

//load env variables
dotenv.config({ path: "./config/config.env" });

const app = express();

//body parser

app.use(express.json());

//connect database
connectDB();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/bootcamps", bootcamp);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

//handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //Close server & exit process
  server.close(() => process.exit(1));
});
