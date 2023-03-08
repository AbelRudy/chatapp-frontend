import { StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../utils/Colors";

export default function Input({
    id,
	label,
	keyboardType,
	withIcon,
	iconName,
	iconSize,
	IconPack,
	value,
	onChangeText,
	secureTextEntry,
	errorText,
	onEndEditing,
	onSubmitEditing
}) {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>

			<View style={styles.inputContainer}>
				{!!withIcon && (
					<IconPack
						name={iconName}
						color="black"
						size={iconSize || 24}
						style={styles.icon}
					/>
				)}
				<TextInput
					secureTextEntry={secureTextEntry}
					value={value}
					onChangeText={(text) => onChangeText(id, text)}
					onEndEditing={(event) => onEndEditing(id, event.nativeEvent.text)}
					onSubmitEditing={onSubmitEditing}
					keyboardType={keyboardType}
					style={styles.textBox}
				/>
			</View>
			{!!errorText && <Text style={styles.errorText}>{errorText}</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		marginBottom: 10,
	},
	label: {
		marginVertical: 8,
	},
	inputContainer: {
		width: "100%",
		paddingHorizontal: 10,
		borderRadius: 2,
		backgroundColor: Colors.nearlyWhite,
		flexDirection: "row",
		alignItems: "center",
	},
	icon: {
		marginRight: 10,
	},
	textBox: {
		color: Colors.textColor,
		paddingVertical: 15,
		flex: 1,
	},
	errorText: {
		color: Colors.errorTextColor,
		marginTop: 5,
	}
});
