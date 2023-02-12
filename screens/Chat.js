import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import BackgroundImage from "../assets/background.png"

export default function Chat() {
	return (
		<ImageBackground source={BackgroundImage} style={styles.BackgroundImage}>
			<View style={styles.container}>
				<Text>Chat</Text>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
        flexDirection: 'column'
	},
    BackgroundImage: {
        flex: 1
    }
});
