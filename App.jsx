/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Calendar from "./src/screens/Calendar";
import Home from "./src/screens/Home";

const Tab = createBottomTabNavigator();

const App = () => {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Tab.Navigator>
					<Tab.Screen
						name="Home"
						component={Home}
						options={{
							title: "Home",
							tabBarIcon: () => <Text>🏠</Text>,
						}}
					/>
					<Tab.Screen
						name="Calendar"
						component={Calendar}
						options={{
							title: "Calendar",
							tabBarIcon: () => <Text>📅</Text>,
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
};

export default App;
