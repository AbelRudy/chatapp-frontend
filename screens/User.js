import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function User({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>User</Text>
			<Button
				title="Go to chats Page"
				onPress={() => navigation.navigate("Chats")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
	},
});
