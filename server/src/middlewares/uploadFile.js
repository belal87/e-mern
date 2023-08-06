const multer = require("multer");
//const path = require("path");
const { ALLOWED_FILE_TYPES, MAX_FILE_SIZE } = require("../config/config");

//const createError = require("http-errors");

/* const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOAD_DIRECTORY);
  },
  filename: function (req, file, cb) {
    const extname = path.extname(file.originalname);
    cb(
      null,
      Date.now() + "-" + file.originalname.replace(extname, "") + extname
    );
  },
});

const fileFilter = (req, file, cb) => {
  const extname = path.extname(file.originalname);
  if (!ALLOWED_FILE_TYPES.includes(extname.substring(1))) {
    return cb(new Error("File type not allowed"), false);
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter,
}); */

// storing image as buffer
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith("image/")) {
    return cb(new Error("Only image file are allowed"), false);
  }
  if (file.size > MAX_FILE_SIZE) {
    return cb(new Error("File size exceeds the maximum limit"), false);
  }
  if (!ALLOWED_FILE_TYPES.includes(file.mimetype)) {
    return cb(new Error("File type is not allowed"), false);
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;
