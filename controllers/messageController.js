const asyncHandler = require("express-async-handler");
const { insertMessage } = require("../models/messageRepository");
exports.postMessage = asyncHandler(async (req, res) => {
  await insertMessage({ text: req.body.message, username: req.body.username });
  res.redirect("/");
});
