import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Logo from "../assets/logo.png";
import Input from "./Input";

export default function LoginForm() {
	return (
		<View>
			<View style={styles.headerContainer}>
				<Image
					source={Logo}
					resizeMode="contain"
					resizeMethod="resize"
					style={styles.headerImage}
				/>
				<Text style={styles.headerText}>Bon retour parmi nous.</Text>
			</View>
			<Input
				label="Nom d'utilisateur ou adresse mail"
				keyboardType="email-address"
				withIcon={true}
				iconName="user"
				iconSize={20}
				IconPack={FontAwesome}
			/>
			<Input
				label="Mot de passe"
				keyboardType="default"
				withIcon={true}
				iconName="key"
				iconSize={20}
				IconPack={FontAwesome5}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	headerContainer: {
		alignItems: "center",
		height: "30%",
        marginBottom: 60
	},
	headerImage: {
		width: "50%",
		height: "50%",
	},
	headerText: {
		fontSize: 20,
		marginTop: 30,
	},
});
