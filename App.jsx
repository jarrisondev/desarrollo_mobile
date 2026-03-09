/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Calendar from "./src/screens/Calendar";
import Home from "./src/screens/Home";

const Stack = createStackNavigator();

const App = () => {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Home"
						component={Home}
						options={{
							title: "Home screen",
						}}
					/>
					<Stack.Screen
						name="Calendar"
						component={Calendar}
						options={{
							title: "Calendar screen",
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
};

export default App;
