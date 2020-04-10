const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/google.js");
const savedRoute = require("./api/savedBooks.js")



// API Routes
router.use("/api", apiRoutes);
router.use("/api", savedRoute);


// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
