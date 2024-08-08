const { Client } = require("pg");

require("dotenv").config();

//Create and populate usernames table

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT,
  username VARCHAR (255),
  added DATE NOT NULL DEFAULT CURRENT_DATE
);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.CONNECTION_URI,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
