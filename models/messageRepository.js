const pool = require("./databaseInit");

exports.fetchMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

exports.insertMessage = async ({ text, username }) => {
  await pool.query("INSERT INTO messages (text, username) VALUES ($1, $2)", [
    text,
    username,
  ]);
};
