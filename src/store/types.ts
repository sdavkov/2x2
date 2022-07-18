import { Task } from "../models/types";

export type ExerciseResult = {
	right: number;
	wrong: number;
	wrongTasks: Task[];
}