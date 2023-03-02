import { Entypo, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import validator from "validator"
import Logo from "../assets/logo.png";
import Input from "./Input";

export default function SignUpForm() {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});

	const [errorText, setErrorText] = useState({
		username:"",
		email:"",
		password:""
	})

	const onChangeText = (id, text) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			[id]: id !== "password" ? text.trim() : text,
		}));
	};

	const onEndEditing = (id, text) => {
		setErrorText((prevErrorText) => ({
			...prevErrorText,
			[id]: validateField(id, text),
		}))
	}

	const validateField = (id, text) => {
		switch (id) {
			case "username":
				if(validator.isEmpty(text))
					return "Le nom d'utilisateur ne peut pas être vide.";
				if(!validator.matches(text, /^[a-zA-Z0-9]{3,50}$/))
					return "Le nom d'utilisateu ne doit contenir que des lettres et des chiffres entre 3 et 50 caractères.";
				return null;
			case "email":
				if(validator.isEmpty(text))
					return "L'adresse email ne peut pas être vide.";
				if(!validator.isEmail(text))
					return "L'adresse email saisie n'est pas valide.";
				return null;
			case "password":
				if(validator.isEmpty(text))
					return "Le mot de passe ne peut pas être vide.";
				if(!validator.matches(text, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/))
					return "Entre 8 et 15 caractères\nAu moins 1 majuscule\nau moins 1 minuscule\nAu moins un chiffre\nAu moins un caractère spécial"
				return null;
			default:
				break;
		}
	}

	const onSubmit = () => {
		// if(validator.isEmpty())
	}

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
				errorText={errorText.username}
				onEndEditing={onEndEditing}
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
				errorText={errorText.email}
				onEndEditing={onEndEditing}
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
				errorText={errorText.password}
				onEndEditing={onEndEditing}
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
