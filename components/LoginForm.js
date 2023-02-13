import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Logo from "../assets/logo.png";
import Input from "./Input";

export default function LoginForm() {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const onChangeText = (id, text) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			[id]: text,
		}));
	};

	return (
		<>
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
				id="username"
				label="Nom d'utilisateur ou adresse mail"
				keyboardType="email-address"
				withIcon={true}
				iconName="user"
				iconSize={20}
				IconPack={FontAwesome}
				value={formData.username}
				onChangeText={onChangeText}
			/>
			<Input
				id="password"
				label="Mot de passe"
				keyboardType="default"
				secureTextEntry={true}
				withIcon={true}
				iconName="key"
				iconSize={20}
				IconPack={FontAwesome5}
				value={formData.password}
				onChangeText={onChangeText}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	headerContainer: {
		alignItems: "center",
		height: "30%",
		marginBottom: 10,
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
