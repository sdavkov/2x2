import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import whitesquaredpaper from '../../assets/images/white-squared-paper.webp';
import { RootStackScreenProps, RootTabParamList } from '../../types';
import MainButton from '../components/UI/MainButton';
import { MonoText } from '../components/UI/StyledText';
import LessonStore from '../store/LessonStore';

type TaskAnswer = {
	userAnswer: number;
	rightAnswer: number;
}

const ExerciseScreen = ({ navigation, route }: RootStackScreenProps<'Exercise'>) => {

	const [answer, setAnswer] = useState<TaskAnswer | null>(null);

	useEffect(() => {
		setAnswer(null);
		LessonStore.start(route.params.operator, route.params.digit);
	}, [route])

	function checkAnswer(userAnswer: number) {
		if (!answer) {
			const rightAnswer = LessonStore.check(userAnswer);
			setAnswer({
				userAnswer,
				rightAnswer
			});
		}
	}

	function next() {
		LessonStore.netx();
		setAnswer(null);
	}

	return (
		(LessonStore.tasks && LessonStore.currentTask) ? (
			<ImageBackground
				source={whitesquaredpaper}
				imageStyle={{ opacity: 0.3 }}
				style={styles.container}>
				<View style={styles.progressBar}>
					<Progress.Bar progress={(LessonStore.currentTaskIndex) * (1 / LessonStore.tasks.length)} width={200} />
				</View>
				<View style={styles.task}>
					<View style={styles.expression}>
						<View style={{ width: 50, height: 50 }}>
							{answer && answer.userAnswer !== answer.rightAnswer &&
								<MonoText style={styles.rightAnswer}>{answer.rightAnswer}</MonoText>
							}
						</View>
						<View style={styles.actionContainer}>
							<MonoText style={styles.action}>
								{`${LessonStore.currentTask.expression.action.operand1} ${LessonStore.currentTask.expression.action.operator} ${LessonStore.currentTask.expression.action.operand2} = `}
							</MonoText>
							<View style={{ width: 50 }}>
								{answer ? answer.userAnswer === answer.rightAnswer ? (
									<MonoText style={styles.rightAnswer}>{answer.userAnswer}</MonoText>
								) : (<MonoText style={styles.falseAnswer}>{answer.userAnswer}</MonoText>) : (
									<MonoText style={styles.action}>?</MonoText>
								)}
							</View>
						</View>
					</View>
					<View style={styles.variants}>
						{LessonStore.currentTask.expression.variants.map(answer => (
							<MainButton key={answer} style={styles.button} onPress={() => checkAnswer(answer)}>
								<MonoText style={styles.buttonText}>{answer}</MonoText>
							</MainButton>))}
					</View>
				</View>
				<View style={styles.answer}>
					{answer && (
						<MainButton onPress={() => next()} style={styles.nextButton}>
							<Text style={styles.buttonText}>Далее</Text>
						</MainButton>
					)}
				</View>
			</ImageBackground >
		) : (
			<View style={styles.total}>
				<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
					<Text style={styles.rightAnswer}>{LessonStore.totalResult.right}</Text>
					<Text style={styles.action}> / </Text>
					<Text style={styles.falseAnswer}>{LessonStore.totalResult.wrong}</Text>
				</View>
				{LessonStore.totalResult.wrong > 0 && (
					<View>
						<Text style={styles.action}>Запомни</Text>
						<ScrollView>
							{LessonStore.totalResult.wrongTasks.map((task, index) => (
								<MonoText key={index} style={styles.action}>
									{`${task.expression.action.operand1} ${task.expression.action.operator} ${task.expression.action.operand2} = ${task.expression.answer}`}
								</MonoText>
							))}
						</ScrollView>
					</View>
				)}
				<View>
					<MainButton onPress={() => next()} style={styles.nextButton}>
						<Text style={styles.buttonText}>Повторить</Text>
					</MainButton>
					<MainButton onPress={() => next()} style={styles.nextButton}>
						<Text style={styles.buttonText}>Завершить</Text>
					</MainButton>
				</View>
			</View>
		)
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	progressBar: {
		marginVertical: 20
	},
	task: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	expression: {
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	},
	actionContainer: {
		flexDirection: 'row'
	},
	action: {
		fontSize: 40,
		fontWeight: '500',
		textAlign: 'center',
	},
	rightAnswer: {
		color: 'green',
		fontSize: 40,
		textAlign: 'center',
	},
	falseAnswer: {
		color: 'red',
		fontSize: 40,
		textAlign: 'center',
		textDecorationLine: 'line-through'
	},
	variants: {
		flexDirection: 'row',
		justifyContent: 'center',
		flexWrap: 'wrap',
		marginVertical: 30
	},
	button: {
		marginHorizontal: 10,
		marginBottom: 20
	},
	buttonText: {
		fontSize: 25,
		fontWeight: '500'
	},
	answer: {
		height: '30%',
		marginVertical: 20,
		width: 200,
	},
	nextButton: {
		marginVertical: 20
	},
	total: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center'
	}
})

export default observer(ExerciseScreen)