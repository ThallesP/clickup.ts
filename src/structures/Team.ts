import { User } from "./Member.js";

export type TeamProps = {
  id: string;
  name: string;
  color: string;
  avatar: string;
  members: {
    user: User;
  }[];
};

export class Team {
  constructor(props: TeamProps) {
    this.id = props.id;
    this.name = props.name;
    this.color = props.color;
    this.avatar = props.avatar;
    this.members = props.members.map((m) => m.user);
  }

  id: string;
  name: string;
  color: string;
  avatar: string;
  members: User[];
}
