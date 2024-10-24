const jwt = require("jsonwebtoken");
const logger = require("../logger");
const { throwError } = require("../helpers/errorUtil");
const {
  returnMessage,
  validateEmail,
  passwordValidation,
  verifyUser,
} = require("../utils/utils");
const statusCode = require("../messages/statusCodes.json");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const sendEmail = require("../helpers/sendEmail");

class UserService {
  tokenGenerator = async (payload) => {
    try {
    } catch (error) {
      logger.error(`Error while token generate, ${error}`);
      throwError(error?.message, error?.statusCode);
    }
  };

  // Service Method Name
  serviceName = async (payload) => {
    try {
    } catch (error) {
      logger.error(`Error name: ${error}`);
      return throwError(error?.message, error?.statusCode);
    }
  };
}

module.exports = UserService;
