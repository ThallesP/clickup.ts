import { ClickUpData } from "./../util.js";
import { TimeTracking } from "./../structures/TimeTracking.js";
import axios, { AxiosInstance } from "axios";
import { Auth } from "../client/client.js";

export type GetTimeTrackingEntriesProps = {
  teamId: string;
  startDate?: number;
  endDate?: number;
  assignee?: string;
};

export type GetTimeTrackingRunningProps = {
  teamId: string;
  assignee?: string;
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
    assignee,
  }: GetTimeTrackingEntriesProps) {
    const {
      data: { data: timeTracking },
    } = await this.client.get<ClickUpData<TimeTracking[]>>(
      `/team/${teamId}/time_entries`,
      {
        params: { start_date: startDate, end_date: endDate, assignee },
      }
    );

    return timeTracking.map((t) => new TimeTracking(t));
  }

  async getTimeTrackingRunning({
    teamId,
    assignee,
  }: GetTimeTrackingRunningProps): Promise<TimeTracking | null> {
    const {
      data: { data: timeTracking },
    } = await this.client.get<ClickUpData<TimeTracking>>(
      `/team/${teamId}/time_entries/current`,
      {
        params: { assignee },
      }
    );

    if (!timeTracking) return null;

    return new TimeTracking(timeTracking);
  }
}
