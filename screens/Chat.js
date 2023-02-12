import { Ionicons } from "@expo/vector-icons";
import React, { useCallback, useState } from "react";
import {
	ImageBackground,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackgroundImage from "../assets/background.png";
import Colors from "../utils/Colors";

export default function Chat() {
	const [message, setMessage] = useState("");

	const onChangeText = (text) => {
		setMessage(text);
	};

	const onSubmit = useCallback(() => {
		console.log("Send");
		setMessage("");
	}, [message]);

	return (
		<SafeAreaView style={styles.container} edges={["bottom"]}>
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.select({ android: undefined, ios: "padding" })}
                keyboardVerticalOffset={100}
			>
				<ImageBackground
					source={BackgroundImage}
					style={styles.BackgroundImage}
				/>
				<View style={styles.inputContainer}>
					<TextInput
						value={message}
						style={styles.textBox}
						onChangeText={onChangeText}
						onSubmitEditing={onSubmit}
					/>
					<TouchableOpacity
						onPress={onSubmit}
						style={styles.sendButton}
						disabled={message.length === 0}
					>
						<Ionicons name="send" size={20} color="white" />
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "#fff",
	},
	BackgroundImage: {
		flex: 1,
	},
	inputContainer: {
		flexDirection: "row",
		paddingVertical: 8,
		paddingHorizontal: 10,
		height: 50,
	},
	textBox: {
		flex: 1,
		borderWidth: 1,
		borderRadius: 50,
		borderColor: Colors.lightGrey,
		marginRight: 15,
		paddingHorizontal: 12,
	},
	sendButton: {
		backgroundColor: Colors.primary,
		justifyContent: "center",
		alignItems: "center",
		width: 50,
		padding: 5,
		borderRadius: 50,
	},
});
