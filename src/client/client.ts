import { TeamManager } from "../managers/TeamManager.js";
import { TimeTrackingManager } from "../managers/TimeTrackingManager.js";

export type Auth = {
  token: string;
};

export type ClientProps = {
  auth: Auth;
};

export class Client {
  #auth: Auth;
  constructor({ auth }: ClientProps) {
    this.#auth = auth;

    this.timeTracking = new TimeTrackingManager({ auth: this.#auth });
    this.team = new TeamManager({ auth: this.#auth });
  }

  timeTracking: TimeTrackingManager;
  team: TeamManager;
}
