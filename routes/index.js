const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/google.js");
const savedRoute = require("./api/savedBooks.js")

// API Routes
router.use("/api", apiRoutes);
router.use("/api", savedRoute);

router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;