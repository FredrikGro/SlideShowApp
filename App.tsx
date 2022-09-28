import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CameraScreen from "./screens/CameraScreen";
import Home from "./screens/HomeScreen";
import LogIn from "./screens/LogInScreen";
import NewProjectScreen from "./screens/NewProjectScreen";
import ProjectNavigation from "./screens/ProjectNavigationScreen";
import Projects from "./screens/ProjectsScreen";
import SignIn from "./screens/SignInScreen";

import { colors } from "./components/colors"

const { primary, secondary, accent, black, gray } = colors;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined;
  LogIn: undefined;
  NewProject: undefined;
  ProjectNavigation: undefined;
  Projects: undefined;
  SignIn: undefined;
  CameraScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" backgroundColor={primary}/>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({ headerTitle: route.name, headerStyle:{
              backgroundColor: secondary}
            })}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen
            name="ProjectNavigation"
            component={ProjectNavigation}
          />
          <Stack.Screen name="NewProject" component={NewProjectScreen} />
          <Stack.Screen name="Projects" component={Projects} />
          <Stack.Screen name="CameraScreen" component={CameraScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
