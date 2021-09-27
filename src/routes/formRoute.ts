import controllers from "../controllers/formControllers";
const express = require("express");
const router = express.Router();

router.post("/metadata", controllers.postMetadata);
router.get("/metadata/:id", controllers.getMetadata);
router.post("/response", controllers.submitResponse);

module.exports = router;
