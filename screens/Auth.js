import React, { useState } from "react";
import {
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignupForm";

import Colors from "../utils/Colors";

export default function Auth() {
	const [isLoginForm, setIsLoginForm] = useState(true);

	return (
		<SafeAreaView style={styles.container} edges={["top"]}>
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.select({ android: undefined, ios: "padding" })}
				keyboardVerticalOffset={100}
			>
				{isLoginForm ? <LoginForm /> : <SignUpForm />}
				<TouchableOpacity style={styles.submitButton}>
					<Text style={{ color: "white" }}>Se connecter</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.changeForm}>
					<Text
						style={{ color: Colors.primary }}
						onPress={() => setIsLoginForm((isLoginForm) => !isLoginForm)}
					>
						{isLoginForm
							? "Pas encore membre ? Cliquez ici"
							: "Déjà membre ? C'est par ici"}
					</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 12,
		paddingVertical: 0,
	},
	submitButton: {
		backgroundColor: Colors.primary,
		paddingVertical: 15,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 20,
		marginTop: 10,
	},
	changeForm: {
		paddingVertical: 15,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 20,
		marginTop: 10,
	},
});
