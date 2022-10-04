import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProjectProvider from "./contexts/ProjectContext";
import Home from "./screens/HomeScreen";
import LogIn from "./screens/LogInScreen";
import SignIn from "./screens/SignInScreen";
import { colors } from "./components/colors";
import Map from "./screens/MapScreen";
import DrawerNavigator from "./Navigation/Drawer/DrawerNagivator";
import React from "react";
import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Info from "./screens/InfoScreen";

const { primary, secondary } = colors;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined;
  HomeDrawer: undefined;
  LogIn: undefined;
  SignIn: undefined;
  Map: undefined;
  Info: undefined;
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
            <Stack.Screen
              name="Home"
              component={Home}
              options={({ navigation }) => ({
                headerRight: () => (
                  <Pressable onPress={() => navigation.navigate("Info")}>
                    <MaterialIcons
                      name="info-outline"
                      size={24}
                      color="black"
                    />
                  </Pressable>
                ),
              })}
            />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen
              name="HomeDrawer"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Info" component={Info} />
            <Stack.Screen
              name="Map"
              component={Map}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ProjectProvider>
    </SafeAreaProvider>
  );
}
