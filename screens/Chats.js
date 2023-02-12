import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Chats({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>Chats here</Text>
			<Button
				title="Go to user Page"
				onPress={() => navigation.navigate("User")}
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
