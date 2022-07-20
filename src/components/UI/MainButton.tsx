import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

const MainButton = (props: TouchableOpacity['props']) => {
	return (
		<TouchableOpacity {...props} style={[styles.button, props.style]} activeOpacity={0.6} />
	)
}

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#66cdaa',
		borderRadius: 30,
		minWidth: 60,
		height: 60,
		paddingHorizontal: 20
	},
})

export default MainButton