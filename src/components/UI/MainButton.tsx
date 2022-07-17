import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

const MainButton = (props: TouchableOpacity['props']) => {
	return (
		<TouchableOpacity {...props} style={[styles.button, props.style]} activeOpacity={0.6} />
	)
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#66cdaa',
		borderRadius: 30,
		minWidth: 60,
		height: 60,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10
	},
})

export default MainButton