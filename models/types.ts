export type Task = {
	factor1: number;
	factor2: number;
	operator: 'x' | ':';
	correctAnswer: number;
	answers: Array<number>;
}