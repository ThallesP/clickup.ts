export type StatusProps = {
  status: string;
  color: string;
  type: string;
  orderindex: number;
};

export class Status {
  constructor(props: StatusProps) {
    Object.assign(this, props);
  }

  status: string;
  color: string;
  type: string;
  orderindex: number;
}
