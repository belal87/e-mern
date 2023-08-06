require("dotenv").config();
const serverPort = process.env.SERVER_PORT || 5001;
const mongodbURL =
  process.env.MONGODB_ATLAS_URL || "mongodb://localhost:27017/ecomMernDB";

const defaultImagePath =
  process.env.DEFAULT_USER_IMAGE_PATH || "public/images/users/img1.jpeg";

const jwtActivationKey = process.env.JWT_ACTIVATION_KEY || "dfdf34354656";

const smtpUserName = process.env.SMTP_USERNAME || "";
const smtpPassword = process.env.SMTP_PASSWORD || "";
const clientURL = process.env.CLIENT_URL || "";

module.exports = {
  serverPort,
  mongodbURL,
  defaultImagePath,
  jwtActivationKey,
  smtpUserName,
  smtpPassword,
  clientURL,
};
