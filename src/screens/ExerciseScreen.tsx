import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import whitesquaredpaper from '../../assets/images/white-squared-paper.webp';
import MainButton from '../components/UI/MainButton';
import { MonoText } from '../components/UI/StyledText';
import LessonStore from '../store/LessonStore';

const ExerciseScreen = () => {

	useEffect(() => {
		LessonStore.start();
	}, [])

	return (
		(LessonStore.tasks && LessonStore.currentTask) ? (
			<ImageBackground
				source={whitesquaredpaper}
				imageStyle={{ opacity: 0.3 }}
				style={styles.container}>
				<View style={styles.progressBar}>
					<Progress.Bar progress={(LessonStore.currentTaskIndex + 1) * (1 / LessonStore.tasks.length)} width={200} />
				</View>
				<View>
					<MonoText style={styles.question}>
						{`${LessonStore.currentTask.expression.action.operand1} ${LessonStore.currentTask.expression.action.operator} ${LessonStore.currentTask.expression.action.operand1} = ?`}
					</MonoText>
					<View style={styles.answers}>
						{LessonStore.currentTask.expression.variants.map(answer => (
							<MainButton key={answer} style={styles.button}>
								<MonoText style={styles.buttonText}>{answer}</MonoText>
							</MainButton>))}
					</View>
				</View>
			</ImageBackground >
		) : (
			<View>
				<Text>Результат</Text>
			</View>
		)
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	progressBar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
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

export default observer(ExerciseScreen)