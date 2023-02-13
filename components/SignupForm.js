import { Entypo, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "../assets/logo.png";
import Input from "./Input";

export default function SignUpForm() {
	return (
		<>
			<View style={styles.headerContainer}>
				<Image
					source={Logo}
					resizeMode="contain"
					resizeMethod="resize"
					style={styles.headerImage}
				/>
				<Text style={styles.headerText}>
					Bienvenue parmi nous. Remplissez les informations ci-dessous et créez
					un compte
				</Text>
			</View>
			<Input
				label="Nom d'utilisateur"
				keyboardType="default"
				withIcon={true}
				iconName="user"
				iconSize={20}
				IconPack={FontAwesome}
			/>
			<Input
				label="Adresse e-mail"
				keyboardType="email-address"
				withIcon={true}
				iconName="mail"
				iconSize={20}
				IconPack={Entypo}
			/>
			<Input
				label="Mot de passe"
				keyboardType="default"
				withIcon={true}
				iconName="key"
				iconSize={20}
				IconPack={FontAwesome5}
			/>
		</>
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
