import { NavigationContainer } from "@react-navigation/native";
import Auth from "../screens/Auth";

import MainNavigator from "./MainNavigator";

export default function AppNavigator() {
	const isLoggedIn = false;

	return (
		<NavigationContainer>
			{isLoggedIn && <MainNavigator />}
			{!isLoggedIn && <Auth />}
		</NavigationContainer>
	);
}
