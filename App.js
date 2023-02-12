import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./navigation/AppNavigator";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

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
			<AppNavigator />
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
