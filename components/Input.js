import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../constants/colors";
import Colors from "../utils/Colors";

export default function Input({label, keyboardType}) {
	return (
		<View style={styles.container}>
			<Text>{label}</Text>

			<View style={styles.inputContainer}>
				<TextInput keyboardType={keyboardType}/>
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
	},
});
