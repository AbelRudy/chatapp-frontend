import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, View } from "react-native";
import Chats from "../screens/Chats";
import User from "../screens/User";
import { FontAwesome, Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
	return (
		<Tab.Navigator
			initialRouteName="Chats"
			screenOptions={{ headerTitleAlign: "center", headerTitle: "Chatapp" }}
		>
			<Tab.Screen
				name="User"
				component={User}
				options={{
					tabBarLabel: "Utilisateur",
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name="user" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen name="Chats" component={Chats} options={{
					tabBarLabel: "Chats",
					tabBarIcon: ({ color, size }) => (
						<Entypo name="chat" color={color} size={size} />
					),
				}} />
		</Tab.Navigator>
	);
}
