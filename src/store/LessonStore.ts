import { makeAutoObservable } from "mobx";
import { Exercise } from "../models/Exercise";
import { MultiplicationExercise } from "../models/MultiplicationExercise";
import { Task } from "../models/types";

class ExerciseStore {
	exercise: Exercise | null = null;
	tasks: Task[] | null = null;
	currentTask: Task | null = null;

	constructor() {
		makeAutoObservable(this);
	}

	get currentTaskIndex() {
		if (this.tasks && this.currentTask) {
			return this.tasks.indexOf(this.currentTask);
		}
		else {
			return 0;
		}
	}

	netx(): void {
		if (!this.tasks || this.tasks.length === 0 || this.currentTaskIndex + 1 >= this.tasks.length) {
			this.currentTask = null;
		} else if (!this.currentTask) {
			this.currentTask = this.tasks[0];
		}
		else {
			this.currentTask = this.tasks[this.currentTaskIndex + 1];
		}
	}

	start(digit?: number) {
		this.exercise = new MultiplicationExercise();
		this.tasks = this.exercise.generateTasks(digit);
		this.netx();
	}
}

export default new ExerciseStore();