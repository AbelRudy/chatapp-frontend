import { Entypo, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "../assets/logo.png";
import Input from "./Input";

export default function SignUpForm() {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
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
				<Text style={styles.headerText}>Bienvenue parmi nous.</Text>
			</View>
			<Input
				id="username"
				label="Nom d'utilisateur"
				keyboardType="default"
				withIcon={true}
				iconName="user"
				iconSize={20}
				IconPack={FontAwesome}
				value={formData.username}
				onChangeText={onChangeText}
			/>
			<Input
				id="email"
				label="Adresse e-mail"
				keyboardType="email-address"
				withIcon={true}
				iconName="mail"
				iconSize={20}
				IconPack={Entypo}
				value={formData.email}
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
