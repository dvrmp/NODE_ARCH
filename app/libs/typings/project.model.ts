import { Task } from "./task.model";
import User from "./user.model";

export enum Role {
  ADMIN,
  EDITOR,
  CONTRIBUTOR,
}

export interface Participant {
  user: User | string;
  role: Role;
}

export interface Project {
  id: string;
  name?: string;
  description?: string;
  creationDate?: Date | string;
  lastUpdateDate?: Date | string;
  users?: Participant[];
  tasks?: Task[];
}
