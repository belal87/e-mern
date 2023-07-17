const createError = require("http-errors");
const users = require("../models/userModel");

const getUsers = (req, res, next) => {
  try {
    res.status(200).send({
      message: "users were returned",
      users: users,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsers };
