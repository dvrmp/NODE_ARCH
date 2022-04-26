import User from "./user.model";

export enum TaskState {
  TO_DO,
  IN_PROGRESS,
  BLOCKED,
  DONE,
  TESTING,
  DEPLOYED,
}

export interface Task {
  id: string;
  title?: string;
  description?: string;
  creationDate?: Date | string;
  lastUpdateDate?: Date | string;
  state?: TaskState;
  assignedUser?: User | string;
  estimatedTime?: number;
  usedTime?: number;
  watchers?: User[] | string[];
  comments?: Comment[];
}

export interface Comment {
  user: User | string;
  date: Date | string;
  content: string;
}
