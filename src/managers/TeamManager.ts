import axios, { AxiosInstance } from "axios";
import { Auth } from "../index.js";
import { Team } from "../structures/Team.js";

export type TeamManagerProps = {
  auth: Auth;
};

export class TeamManager {
  private client: AxiosInstance;

  constructor({ auth }: TeamManagerProps) {
    this.client = axios.create({
      baseURL: "https://api.clickup.com/api/v2",
      headers: {
        Authorization: auth.token,
      },
    });
  }

  async getCurrentUserTeams(): Promise<Team[]> {
    const {
      data: { teams },
    } = await this.client.get<any>("/team");

    return teams.map((t: any) => new Team(t));
  }
}
