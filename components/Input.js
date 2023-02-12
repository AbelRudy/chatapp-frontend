import { StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../utils/Colors";

export default function Input({ label, keyboardType, withIcon, iconName, iconSize, IconPack }) {
	return (
		<View style={styles.container}>
			<Text>{label}</Text>

			<View style={styles.inputContainer}>
				{!!withIcon && <IconPack name={iconName} color="black" size={iconSize || 24} style={styles.icon} />}
				<TextInput keyboardType={keyboardType} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	inputContainer: {
		width: "100%",
		backgroundColor: "red",
		paddingHorizontal: 10,
		paddingVertical: 15,
		borderRadius: 2,
		backgroundColor: Colors.nearlyWhite,
		flexDirection: "row",
        alignItems: "center"
	},
	icon: {
		marginRight: 10,
	},
});
