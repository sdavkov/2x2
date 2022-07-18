import { observer } from "mobx-react-lite"
import React from "react"
import { StyleSheet, View, Text, ScrollView } from "react-native"
import { ALLOWED_ERRORS } from "../../constants/Exercises"
import { ExerciseResult } from "../../store/types"
import MainButton from "../UI/MainButton"
import { MonoText } from "../UI/StyledText"

type ExerciseTotalProps = {
	result: ExerciseResult
	repeat: () => void;
	exit: () => void;
}

const ExerciseTotal = ({ result, repeat, exit }: ExerciseTotalProps) => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<View style={styles.summary}>
					{result.wrong <= ALLOWED_ERRORS ? (
						<Text style={styles.summaryText}>Ты молодец!</Text>
					) : (
						<Text style={styles.summaryText}>Попробуй еще раз!</Text>
					)}
				</View>
				{result.wrong > 0 && (
					<View style={styles.repeat}>
						<Text style={styles.repeatText}>Выучи</Text>
						<View style={styles.list}>
							{result.wrongTasks.map((task, index) => (
								<MonoText key={index} style={styles.listText}>
									{`${task.expression.action.operand1} ${task.expression.action.operator} ${task.expression.action.operand2} = ${task.expression.answer}`}
								</MonoText>
							))}
						</View>
					</View>
				)}
				<View style={styles.buttons}>
					<MainButton onPress={repeat} style={styles.button}>
						<Text style={styles.buttonText}>Повторить</Text>
					</MainButton>
					<MainButton onPress={exit} style={styles.button}>
						<Text style={styles.buttonText}>Завершить</Text>
					</MainButton>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	summary: {
		marginVertical: 20
	},
	summaryText: {
		fontSize: 30,
	},
	repeat: {
		marginVertical: 20,
		alignItems: 'center'
	},
	repeatText: {
		fontSize: 20,
	},
	list: {
		marginVertical: 20,
	},
	listText: {
		fontSize: 15
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginVertical: 20,
	},
	button: {
		marginHorizontal: 10
	},
	buttonText: {
		fontSize: 25
	},
})

export default observer(ExerciseTotal)