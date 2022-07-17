import { Exercise } from "./Exercise";
import { Task, Operator, Expression } from "./types";

export class MultiplicationExercise extends Exercise {

	getRandomOperand(factor: number) {
		let randomOperand = 0;
		if (factor <= 2) {
			randomOperand = this.randomInteger(2, 6);
		}
		else if (factor === 3) {
			randomOperand = this.randomInteger(2, 5);
		}
		else {
			randomOperand = this.randomInteger(factor - 2, factor + 2);
		}
		return randomOperand;
	}

	getVariants(operand1: number, operand2: number) {
		const answers: number[] = [];
		const correctPosition = this.randomInteger(1, 4);
		for (let i = 1; i < 5; i++) {
			if (i === correctPosition) {
				answers.push(operand1 * operand2);
			}
			else {
				let randomOperand1 = this.getRandomOperand(operand1);
				let randomOperand2 = this.getRandomOperand(operand2);
				while ((randomOperand1 * randomOperand2 === operand1 * operand2)
					|| answers.find(answer => answer === randomOperand1 * randomOperand2)) {
					randomOperand1 = this.getRandomOperand(operand1);
					randomOperand2 = this.getRandomOperand(operand2);
				}
				answers.push(randomOperand1 * randomOperand2);
			}
		}
		return answers;
	}

	override generateTasks(digit?: number): Task[] {
		const tasks: Task[] = [];
		const tasksCount = digit ? 9 : 27;

		while (tasks.length < tasksCount) {

			const operand1 = digit ? digit : this.randomInteger(1, 9);
			const operand2 = this.randomInteger(1, 9);

			if (!tasks.find(task => task.expression.action.operand1 === operand1 && task.expression.action.operand2 === operand2)) {
				tasks.push(
					{
						expression: {
							action: {
								operand1,
								operand2,
								operator: Operator.multiplication,
								brackets: false
							},
							answer: operand1 * operand2,
							unknownSumbol: '?',
							variants: this.getVariants(operand1, operand2),
						},
						userAnswer: null
					});
			}
		}

		return tasks;
	}
}