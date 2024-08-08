const { fetchMessages } = require("../models/messageRepository");
const asyncHandler = require("express-async-handler");
exports.getIndex = asyncHandler(async (req, res) => {
  const data = await fetchMessages();
  res.render("index", { title: "Message board", messages: data });
});
