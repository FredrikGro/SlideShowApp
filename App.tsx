import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Home from "./screens/HomeScreen";
import LogIn from "./screens/LogInScreen";
import NewProjectScreen from "./screens/NewProjectScreen";
import ProjectNavigation from "./screens/ProjectNavigationScreen";
import Projects from "./screens/ProjectsScreen";
import SignIn from "./screens/SignInScreen";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  NewProjectScreen: undefined;
  ProjectNavigationScreen: undefined;
  ProjectsScreen: undefined;
  SignInScreen: undefined;
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ProjectNavigation" component={ProjectNavigation} />
        <Stack.Screen name="NewProject" component={NewProjectScreen} />
        <Stack.Screen name="Projects" component={Projects} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
