import React from 'react'
import { StyleSheet, View } from 'react-native';
import { MonoText } from './UI/StyledText';

const TableItem = ({ digit }: { digit: number }) => {

	function getItems() {
		const items = [];
		for (let i = 1; i < 10; i++) {
			items.push(`${digit} x ${i} = ${digit * i}`);
		}
		return items;
	}

	return (
		<View>
			{getItems().map((item, index) => (
				<MonoText key={index} style={styles.item}>{item}</MonoText>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		fontSize: 16,
		marginVertical: 3
	}
})

export default TableItem