const asyncHandler = require("express-async-handler");
const { addData } = require("../models/messageModel");
exports.postMessage = asyncHandler((req, res) => {
  addData({ text: req.body.message, user: req.body.user });
  res.redirect("/");
});
