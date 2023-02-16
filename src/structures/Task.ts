import { Status } from "./Status.js";

export type TaskProps = {
  id: string;
  name: string;
  status: Status;
  custom_type: string | null;
};

export class Task {
  constructor(props: TaskProps) {
    Object.assign(this, props);
  }

  id: string;
  name: string;
  status: Status;
  custom_type?: null;
}
