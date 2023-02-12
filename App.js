import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Chats from "./screens/Chats";
import User from "./screens/User";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {
	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		async function prepare() {
			// my stuff here
			setAppIsReady(true);
		}

		prepare();
	}, []);

	const onLayout = useCallback(async () => {
		if (appIsReady) await SplashScreen.hideAsync();
	});

	if (!appIsReady) return null;

	return (
		<SafeAreaProvider style={styles.container} onLayout={onLayout}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="Chats"
					screenOptions={{ headerTitleAlign: "center" }}
				>
					<Stack.Screen name="Chats" component={Chats} />
					<Stack.Screen name="User" component={User} />
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
