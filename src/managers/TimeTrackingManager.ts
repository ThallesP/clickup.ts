import { ClickUpData } from "./../util.js";
import { TimeTracking } from "./../structures/TimeTracking.js";
import axios, { AxiosInstance } from "axios";
import { Auth } from "../client/client.js";

export type GetTimeTrackingEntriesProps = {
  teamId: string;
  startDate?: Date;
  endDate?: Date;
};

export type GetTimeTrackingRunningProps = {
  teamId: string;
};

export type TimeTrackingManagerProps = {
  auth: Auth;
};

export class TimeTrackingManager {
  private client: AxiosInstance;

  constructor({ auth }: TimeTrackingManagerProps) {
    this.client = axios.create({
      baseURL: "https://api.clickup.com/api/v2",
      headers: {
        Authorization: auth.token,
      },
    });
  }

  async getTimeTrackingEntries({
    teamId,
    startDate,
    endDate,
  }: GetTimeTrackingEntriesProps) {
    const {
      data: { data: timeTracking },
    } = await this.client.get<ClickUpData<TimeTracking[]>>(
      `/team/${teamId}/time_entries`,
      {
        params: { startDate, endDate },
      }
    );

    return timeTracking.map((t) => new TimeTracking(t));
  }

  async getTimeTrackingRunning({ teamId }: GetTimeTrackingRunningProps) {
    const {
      data: { data: timeTracking },
    } = await this.client.get<ClickUpData<TimeTracking>>(
      `/team/${teamId}/time_entries/current`
    );

    return new TimeTracking(timeTracking);
  }
}
