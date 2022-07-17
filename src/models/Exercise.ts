import { Task } from "./types";

export abstract class Exercise {

	protected randomInteger(min: number, max: number) {
		let rand = min + Math.random() * (max + 1 - min);
		return Math.floor(rand);
	}

	abstract generateTasks(digit?: number): Task[];
}