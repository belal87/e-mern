require("dotenv").config();
const serverPort = process.env.SERVER_PORT || 5001;
const mongodbURL =
  process.env.MONGODB_ATLAS_URL || "mongodb://localhost:27017/ecomMernDB";

const defaultImagePath =
  process.env.DEFAULT_USER_IMAGE_PATH || "public/images/users/img1.jpeg";

module.exports = { serverPort, mongodbURL, defaultImagePath };
