import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import whitesquaredpaper from '../assets/images/white-squared-paper.webp';
import MainButton from '../components/UI/MainButton';
import { MonoText } from '../components/UI/StyledText';
import { MultiplicationExercise } from '../models/MultiplicationExercise';

const ExerciseScreen = () => {
	const exercise = new MultiplicationExercise(3);

	function startExercise() {
		exercise.run();
	}

	return (
		<ImageBackground
			source={whitesquaredpaper}
			imageStyle={{ opacity: 0.3 }}
			style={styles.container}>
			{exercise.currentTask ? (
				<View>
					<Progress.Bar progress={0.3} width={200} />
					<Progress.Pie progress={0.4} size={50} />
					<MonoText style={styles.question}>
						{`${exercise.tasks[0].factor1} ${exercise.tasks[0].operator} ${exercise.tasks[0].factor2} = ?`}
					</MonoText>
					<View style={styles.answers}>
						{exercise.tasks[0].answers.map(answer => (
							<MainButton style={styles.button}>
								<MonoText style={styles.buttonText}>{answer}</MonoText>
							</MainButton>))}
					</View>
				</View>
			) : (
				<MainButton onPress={startExercise}>
					<Text style={styles.buttonText}>Старт</Text>
				</MainButton>
			)
			}
		</ImageBackground >
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	question: {
		fontSize: 40,
		fontWeight: '500'
	},
	answers: {
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
	}
})

export default ExerciseScreen