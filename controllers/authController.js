const catchAsyncError = require("../helpers/catchAsyncError");
const { returnMessage } = require("../utils/utils");
const statusCode = require("../messages/statusCodes.json");
const AuthService = require("../services/authService");
const { sendResponse } = require("../utils/sendResponse");
const authService = new AuthService();

// Controller Method Name
exports.functionName = catchAsyncError(async (req, res, next) => {
  sendResponse(
    res,
    true,
    returnMessage("moduleKey", "subMouleKey"),
    user,
    statusCode.success
  );
});
