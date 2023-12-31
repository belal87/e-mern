const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const { defaultImagePath } = require("../secret");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
      minlength: [3, "user name can be minimum 4 characters"],
      maxlength: [31, "user name can be maximum 31 characters"],
    },
    email: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
      unique: true,
      lowercase: true,
      validator: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email",
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      minlength: [6, "password can be minimum 6 characters"],
      set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
    },
    image: {
      /* type: String,
      default: defaultImagePath, */
      type: Buffer,
      contentType: String,
      required: [true, "Image is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      minlength: [3, "The length can be minimum 3 characters"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
module.exports = User;
