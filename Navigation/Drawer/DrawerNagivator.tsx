import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import * as React from "react";
import LogIn from "../../screens/LogInScreen";
import NewProject from "../../screens/NewProjectScreen";
import ProjectNavigation from "../../screens/ProjectNavigationScreen";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "../../components/colors";
import ProjectName from "../../screens/ProjectNameScreen";
import Projects from "../../screens/ProjectsScreen";
import Home from "../../screens/HomeScreen";
const { primary } = colors;

export type DrawerParamList = {
  HomeDrawer: undefined;
  Logout: undefined;
  Map: undefined;
  NewProject: { projectName: string };
  ProjectNavigation: undefined;
  Projects: undefined;
  ProjectName: undefined;
  SlideShow: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{ headerShown: true }}
      initialRouteName="HomeDrawer"
      drawerContent={(props) => {
        const filteredProps = {
          ...props,
          state: {
            ...props.state,
            routeNames: props.state.routeNames.filter((routeName) => {
              routeName !== "NewProject";
            }),
            routes: props.state.routes.filter(
              (route) => route.name !== "NewProject"
            ),
          },
        };
        return (
          <DrawerContentScrollView {...filteredProps}>
            <DrawerItemList {...filteredProps} />
            <DrawerItem
              icon={() => <MaterialIcons name="logout" size={24} color="black" />}
              label="Logout"
              onPress={() => props.navigation.navigate("Home")}
            />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen
        name="ProjectNavigation"
        component={ProjectNavigation}
        options={{
          title: "Project Navigation",
          drawerIcon: () => {
            return <MaterialIcons name="alt-route" size={24} color="black" />;
          },
          headerStyle: {
            backgroundColor: primary,
          },
        }}
      />
      <Drawer.Screen
        name="ProjectName"
        component={ProjectName}
        options={{
          title: "New Project",
          drawerIcon: () => {
            return (
              <MaterialIcons name="create-new-folder" size={24} color="black" />
            );
          },
          headerStyle: {
            backgroundColor: primary,
          },
        }}
      />
      <Drawer.Screen
        name="Projects"
        component={Projects}
        options={{
          title: "My projects",
          drawerIcon: () => {
            return <MaterialIcons name="folder" size={24} color="black" />;
          },
          headerStyle: {
            backgroundColor: primary,
          },
        }}
      />
      <Drawer.Screen
        name="NewProject"
        component={NewProject}
        options={{
          title: "My new project",
          drawerIcon: () => {
            return <MaterialIcons name="folder" size={24} color="black" />;
          },
        }}
      />
{/*       <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Log out",
          drawerIcon: () => {
            return <MaterialIcons name="logout" size={24} color="black" />;
          },
        }}
      /> */}
    </Drawer.Navigator>
  );
}
