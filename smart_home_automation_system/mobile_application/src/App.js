import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardPage from "./pages/DashboardPage";
import RoomDetailsPage from "./pages/RoomDetailsPage";
import DeviceDetailsPage from "./pages/DeviceDetailsPage";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={DashboardPage} />
        <Stack.Screen name="RoomDetailsPage" component={RoomDetailsPage} />
        <Stack.Screen name="DeviceDetailsPage" component={DeviceDetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};