import { Task } from "./types";

export class MultiplicationExercise {
	tasks: Array<Task>;
	currentTask?: Task;

	randomInteger(min: number, max: number) {
		let rand = min + Math.random() * (max + 1 - min);
		return Math.floor(rand);
	}

	getIncorrectFactor(factor: number) {
		let incorrectFactor = 0;
		if (factor <= 2) {
			incorrectFactor = this.randomInteger(2, 6);
		}
		else if (factor === 3) {
			incorrectFactor = this.randomInteger(2, 5);
		}
		else {
			incorrectFactor = this.randomInteger(factor - 2, factor + 2);
		}
		return incorrectFactor;
	}

	fillAnswers(factor1: number, factor2: number) {
		const answers: Array<number> = [];
		const correctPosition = this.randomInteger(1, 4);
		for (let i = 1; i < 5; i++) {
			if (i === correctPosition) {
				answers.push(factor1 * factor2);
			}
			else {
				let incorrectFactor1 = this.getIncorrectFactor(factor1);
				let incorrectFactor2 = this.getIncorrectFactor(factor2);
				while ((factor1 === incorrectFactor1 && factor2 === incorrectFactor2)
					|| answers.find(answer => answer === incorrectFactor1 * incorrectFactor2)) {
					incorrectFactor1 = this.getIncorrectFactor(factor1);
					incorrectFactor2 = this.getIncorrectFactor(factor2);
				}
				answers.push(incorrectFactor1 * incorrectFactor2);
			}
		}
		return answers;
	}

	constructor(digit?: number) {
		this.tasks = [];
		const operator = 'x';

		if (digit) {
			while (this.tasks.length < 9) {
				const factor2 = this.randomInteger(1, 9);
				if (!this.tasks.find(task => task.factor2 === factor2)) {
					this.tasks.push({ factor1: digit, factor2, operator, correctAnswer: digit * factor2, answers: this.fillAnswers(digit, factor2) });
				}
			}
		} else {
			while (this.tasks.length < 72) {
				const factor1 = this.randomInteger(1, 9);
				const factor2 = this.randomInteger(1, 9);
				if (!this.tasks.find(task => task.factor1 === factor1 && task.factor2 === factor2)) {
					this.tasks.push({ factor1, factor2, operator, correctAnswer: factor1 * factor2, answers: this.fillAnswers(factor1, factor2) });
				}
			}
		}
	}

	run() {
		if (this.tasks.length === 0) {
			return;
		}
		this.currentTask = this.tasks[0];
	}
}