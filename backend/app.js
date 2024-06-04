const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const categoryRouter = require("./routes/categoryRouter");
const transactionRouter = require("./routes/transactionRouter");
const path = require("path");
const app = express();

//!Connect to mongodb
mongoose
  .connect("mongodb+srv://rishavranjan7102:qb64zqW8pkAjzXaf@mernexpensetracker.ketcnnr.mongodb.net/?retryWrites=true&w=majority&appName=MernExpenseTracker")
  .then(() => console.log("DB Connected"))
  .catch((e) => console.log(e));

//! Cors config
const corsOptions = {
  // origin: ["https://rococo-valkyrie-34ee8f.netlify.app/"],
  Access-Control-Allow-Origin: *

};
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, './frontend/dist')));


//!Middlewares
app.use(express.json()); //?Pass incoming json data
//!Routes
app.use("/", userRouter);
app.use("/", categoryRouter);
app.use("/", transactionRouter);
//! Error
app.use(errorHandler);

//!Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server is running on this port... ${PORT} `)
);
