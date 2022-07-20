import { FontAwesome } from '@expo/vector-icons';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Task } from '../../models/types';
import IconButton from '../UI/IconButton';
import MainButton from '../UI/MainButton';
import { MonoText } from '../UI/StyledText';

type ExerciseTaskProps = {
	task: Task;
	checkAnswer: (answer: number) => void;
	next: () => void;
}

const ExerciseTask = ({ task, checkAnswer, next }: ExerciseTaskProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.task}>
				<View style={styles.answer}>
					{task.userAnswer && task.userAnswer !== task.expression.answer &&
						<MonoText style={[styles.text, styles.right]}>{task.expression.answer}</MonoText>
					}
				</View>
				<View style={styles.expression}>
					<MonoText style={styles.text}>
						{`${task.expression.action.operand1} ${task.expression.action.operator} ${task.expression.action.operand2} = `}
					</MonoText>
					<View style={styles.answer}>
						{task.userAnswer ? task.userAnswer === task.expression.answer ? (
							<MonoText style={[styles.text, styles.right]}>{task.userAnswer}</MonoText>
						) : (<MonoText style={[styles.text, styles.wrong]}>{task.userAnswer}</MonoText>) : (
							<MonoText style={styles.text}>?</MonoText>
						)}
					</View>
				</View>
			</View>
			<View style={styles.variants}>
				{task.expression.variants.map(answer => (
					<MainButton key={answer} style={styles.variantButton} onPress={() => checkAnswer(answer)}>
						<MonoText style={styles.buttonText}>{answer}</MonoText>
					</MainButton>))}
			</View>
			<View style={styles.next}>
				{task.userAnswer && (
					<IconButton
						onPress={next}
						icon={(<FontAwesome name="forward" size={24} color="black" />)}
						text="Далее" />
				)}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	task: {
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	},
	answer: {
		width: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 40,
	},
	right: {
		color: 'green'
	},
	wrong: {
		color: 'red',
		textDecorationLine: 'line-through',
	},
	expression: {
		flexDirection: 'row'
	},
	variants: {
		flexDirection: 'row',
		justifyContent: 'center',
		flexWrap: 'wrap',
		marginVertical: 30
	},
	variantButton: {
		marginHorizontal: 10,
		marginBottom: 20
	},
	buttonText: {
		fontSize: 25
	},
	next: {
		height: '30%',
		marginVertical: 20,
		width: 200,
	},
})

export default observer(ExerciseTask);