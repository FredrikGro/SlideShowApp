import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HeaderMenuButton from "./components/Button/HeaderMenuButton";
import { colors } from "./components/colors";
import ProjectProvider from "./contexts/ProjectContext";
import Home from "./screens/HomeScreen";
import LogIn from "./screens/LogInScreen";
import NewProject from "./screens/NewProjectScreen";
import ProjectName from "./screens/ProjectNameScreen";
import ProjectNavigation from "./screens/ProjectNavigationScreen";
import Projects from "./screens/ProjectsScreen";
import SignIn from "./screens/SignInScreen";

const { primary, secondary } = colors;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined;
  LogIn: undefined;
  NewProject: { projectName: string };
  ProjectNavigation: undefined;
  Projects: undefined;
  SignIn: undefined;
  ProjectName: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <ProjectProvider>
        <NavigationContainer>
          <StatusBar style="auto" backgroundColor={primary} />
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
              headerTitle: route.name,
              headerStyle: {
                backgroundColor: secondary,
              },
            })}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen
              name="ProjectNavigation"
              component={ProjectNavigation}
              options={{ headerRight: () => <HeaderMenuButton /> }}
            />
            <Stack.Screen
              name="NewProject"
              component={NewProject}
              options={{ headerRight: () => <HeaderMenuButton /> }}
            />
            <Stack.Screen
              name="ProjectName"
              component={ProjectName}
              options={{ headerRight: () => <HeaderMenuButton /> }}
            />
            <Stack.Screen
              name="Projects"
              component={Projects}
              options={{ headerRight: () => <HeaderMenuButton /> }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ProjectProvider>
    </SafeAreaProvider>
  );
}
