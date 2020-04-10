const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Matches with "/api/google"
router
  .route("/google")
  .get(googleController.findAll)
  .post(googleController.save);

module.exports = router;