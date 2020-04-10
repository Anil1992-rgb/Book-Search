const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
//   {
//     useCreateIndex: true,
//     useNewUrlParser: true
//   }
// );

//Heroku
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://"+ process.env.MONGO_USER +":"+ process.env.MONGO_PASS + "@ds127300.mlab.com:27300/heroku_chzs10z1",
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

app.get('/', (req, res) => {
    res.send("hello")
})

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
