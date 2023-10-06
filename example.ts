import { Client } from "./src/index.js";

const client = new Client({
  auth: {
    token: process.env.CLICKUP_TOKEN ?? "",
  },
});

(async () => {
  const teams = await client.team.getCurrentUserTeams();

  console.log(teams);
})();
