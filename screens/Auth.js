import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";

export default function Auth() {
	return (
		<SafeAreaView>
			<Input
				label="Username"
				keyboardType="default"
				withIcon={true}
				iconName="user"
                iconSize={24}
				IconPack={FontAwesome}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});
