require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Router = require("./Router/productRouter");
const authRouter = require("./Router/auth");
const bodyParser = require("body-parser");
const path = require("path");
const errorHander = require("./middleware/error");

const app = express();

const cors = require("cors");
const { json } = require("body-parser");

app.use(cors());
app.use("/Uploads", express.static("Uploads"));
app.use(json());
app.use(Router, authRouter);

// error hander (should be  last piece of middleware)
app.use(errorHander);

// app.use(express.static(path.join(__dirname,'./client/build')));
// app.get("*",function(req,res){
//     res.sendFile(path.join(__dirname,"./client/build/index.html"));
// })

// mongoose connection
async function DATABASECONNECTION() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    ("sucessfully connect to database");
  } catch (err) {
    err;
  }
}
//
DATABASECONNECTION();
const server = app.listen(process.env.PORT, () => {
  `Server started on port ${process.env.PORT}`;
});
process.on("unhandledRejection", (err, promise) => {
  `logged Error:${err}`;
  server.close(() => process.exit(1));
});

// connect to router
