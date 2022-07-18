import { makeAutoObservable } from "mobx";
import { Exercise } from "../models/Exercise";
import { MultiplicationExercise } from "../models/MultiplicationExercise";
import { Operator, Task } from "../models/types";

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

	get totalResult() {
		let result: { right: number, wrong: number, wrongTasks: Task[] } = {
			right: 0,
			wrong: 0,
			wrongTasks: []
		};

		if (this.tasks) {
			result = this.tasks.reduce((prev, task) => {
				if (task.userAnswer === task.expression.answer) {
					prev.right++;
				} else {
					prev.wrong++;
					prev.wrongTasks.push(task);
				}
				return prev;
			}, result);
		}
		return result;
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

	start(operator: Operator, digit?: number) {
		this.exercise = new MultiplicationExercise();
		this.tasks = this.exercise.generateTasks(digit);
		this.netx();
	}

	check(answer: number): number {
		if (this.currentTask) {
			this.currentTask.userAnswer = answer;
			return this.currentTask.expression.answer;
		}
		return 0;
	}
}

export default new ExerciseStore();