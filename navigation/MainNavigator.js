import { Entypo, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "../screens/Chat";

import Chats from "../screens/Chats";
import User from "../screens/User";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
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
			<Tab.Screen
				name="Chats"
				component={Chats}
				options={{
					tabBarLabel: "Chats",
					tabBarIcon: ({ color, size }) => (
						<Entypo name="chat" color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export default function MainNavigator() {
	return (
		<Stack.Navigator >
			<Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
			<Stack.Screen name="Chat" component={Chat} />
		</Stack.Navigator>
	);
}
