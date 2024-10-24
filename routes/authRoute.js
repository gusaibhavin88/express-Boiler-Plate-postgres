const authRoute = require("express").Router();
const authController = require("../controllers/authController");
const validatorFunc = require("../utils/validatorFunction.helper");
const { protect } = require("../middlewares/authUserMiddleware");
const { checkProfileSize, upload } = require("../helpers/multer");

authRoute.post(
  "/routerName"
  // checkProfileSize,
  // upload.single("profile_image"),
  // validateUserRegistration,
  // validatorFunc,
  // authController.functionName
);
authRoute.use(protect);

module.exports = authRoute;
