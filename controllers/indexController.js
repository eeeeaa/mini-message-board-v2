const { getMessageData } = require("../models/messageModel");

exports.getIndex = (req, res) => {
  res.render("index", { title: "Message board", messages: getMessageData() });
};
