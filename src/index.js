const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route.js");
const { default: mongoose } = require("mongoose");
const multer = require('multer')
const app = express();

app.use(multer().any());
app.use(bodyParser.json());


mongoose
  .connect(
    "mongodb+srv://betechnoid:Abhishek8285366507@cluster0.ctbkbk3.mongodb.net/opentointern?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 3001, function () {
  console.log("Express app running on port " + (process.env.PORT || 3001));
});
