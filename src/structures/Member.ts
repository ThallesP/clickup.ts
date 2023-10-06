export type UserProps = {
  id: number;
  username: string;
  color: string;
  profilePicture: string;
};

export class User {
  constructor(props: UserProps) {
    Object.assign(this, props);
  }

  id: number;
  username: string;
  color: string;
  profilePicture: string;
}
