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
    connectionString: `postgresql://${process.env.USER}:${process.env.ROLE_PASSWORD}@${process.env.HOST}:5432/${process.env.DATABASE_NAME}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
