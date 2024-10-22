const catchAsyncError = require("../helpers/catchAsyncError");
const { returnMessage } = require("../utils/utils");
const statusCode = require("../messages/statusCodes.json");
const UserService = require("../services/userService");
const { sendResponse } = require("../utils/sendResponse");
const userService = new UserService();

// Method Name
exports.controllerName = catchAsyncError(async (req, res, next) => {
  sendResponse(
    res,
    true,
    returnMessage("moduleKey", "subMouleKey"),
    user,
    statusCode.success
  );
});
