import { observer } from 'mobx-react-lite';
import React, { useCallback, useEffect } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';
import whitesquaredpaper from '../../assets/images/white-squared-paper.webp';
import { RootStackScreenProps } from '../../types';
import ExerciseTask from '../components/exercise/ExerciseTask';
import ExerciseTotal from '../components/exercise/ExerciseTotal';
import ExerciseStore from '../store/ExerciseStore';

const ExerciseScreen = ({ navigation, route }: RootStackScreenProps<'Exercise'>) => {

	useEffect(() => {
		ExerciseStore.start(route.params.operator, route.params.digit);
	}, [route])

	function checkAnswer(userAnswer: number) {
		if (ExerciseStore.currentTask && !ExerciseStore.currentTask.userAnswer) {
			ExerciseStore.check(userAnswer);
		}
	}

	function next() {
		ExerciseStore.netx();
	}

	function repeat() {
		ExerciseStore.start(route.params.operator, route.params.digit);
	}

	function exit() {
		navigation.popToTop();
	}

	const barProgress = useCallback(() => {
		return ExerciseStore.tasks && ExerciseStore.currentTask
			? (ExerciseStore.currentTaskIndex * (1 / ExerciseStore.tasks.length))
			: 0;
	}, [ExerciseStore.tasks, ExerciseStore.currentTask])

	return (
		(ExerciseStore.tasks && ExerciseStore.currentTask) ? (
			<ImageBackground
				source={whitesquaredpaper}
				imageStyle={{ opacity: 0.3 }}
				style={styles.container}>
				<View style={styles.progressBar}>
					<Progress.Bar progress={barProgress()} width={200} />
				</View>
				<ExerciseTask task={ExerciseStore.currentTask} checkAnswer={checkAnswer} next={next} />
			</ImageBackground >
		) : (
			<ExerciseTotal result={ExerciseStore.totalResult} repeat={repeat} exit={exit} />
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
})

export default observer(ExerciseScreen)