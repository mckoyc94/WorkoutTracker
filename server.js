// Calls necessary components for backend
const express = require("express");
const mongoose = require("mongoose");
const path = require("path")

//Defines PORT
const PORT = process.env.PORT || 5000;

// Defines use of express
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Links app to MongoDB database 'workout'
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
 });

// Links app with api routes
require("./routes/api-routes")(app)

// Sends User to Index page
app.get("/", (req, res)=> {
  res.sendFile(path.join(__dirname, "./public/index.html"))
})

//Sends User to Stats page
app.get("/stats", (req, res)=> {
  res.sendFile(path.join(__dirname, "./public/stats.html"))
})

//Sends User to Exercise page
app.get("/exercise", (req, res)=> {
  res.sendFile(path.join(__dirname, "./public/exercise.html"))
})

// Tells app to listen on PORT
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });