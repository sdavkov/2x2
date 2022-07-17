export type Task = {
	expression: Expression;
	userAnswer: number | null;
}

export type Expression = {
	action: Action;
	answer: number | null;
	unknownSumbol: string;
	variants: number[];
}

export type Action = {
	operand1: Action | number | null;
	operand2: Action | number | null;
	operator: Operator;
	brackets: boolean;
}

export enum Operator {
	multiplication = 'x',
	dividion = ':',
	subtraction = '-',
	addition = '+'
}
