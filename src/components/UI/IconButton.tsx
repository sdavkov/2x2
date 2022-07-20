import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import MainButton from './MainButton'

type IconButtonProps = {
	icon: React.ReactElement;
	text: string;
} & TouchableOpacity['props'];

const IconButton: FC<IconButtonProps> = ({ icon, text, ...props }) => {
	return (
		<MainButton {...props} activeOpacity={0.6}>
			<View style={styles.wrapper}>
				<View style={styles.icon}>
					{icon}
				</View>
				<Text style={styles.text}>{text}</Text>
			</View>
		</MainButton>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: "row",
		alignItems: "center",
	},
	icon: {
		marginRight: 10
	},
	text: {
		fontSize: 20,
	},
})

export default IconButton