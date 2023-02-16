import { Task } from "./Task.js";

export type TimeTrackingProps = {
  id: string;
  task: Task;
  wid: string;
  user: User;
  billable: boolean;
  start: string;
  end: string;
  duration: string;
  description: string;
  tags: string[];
  source: string;
  at: string;
  task_location: TaskLocation;
  task_url: string;
};

export interface User {
  id: number;
  username: string;
  email: string;
  color: string;
  initials: string;
  profilePicture?: null;
}

export interface TaskLocation {
  list_id: string;
  folder_id: string;
  space_id: string;
}

export class TimeTracking {
  constructor(props: TimeTrackingProps) {
    Object.assign(this, props);
  }

  id: string;
  task: Task;
  wid: string;
  user: User;
  billable: boolean;
  start: string;
  end: string;
  duration: string;
  description: string;
  tags: string[];
  source: string;
  at: string;
  task_location: TaskLocation;
  task_url: string;
}
