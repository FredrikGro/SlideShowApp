import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import Home from "../../screens/HomeScreen";
import LogIn from "../../screens/LogInScreen";
import NewProject from "../../screens/NewProjectScreen";
import ProjectNavigation from "../../screens/ProjectNavigationScreen";

type DrawerParamList = {
  MyProjects: undefined;
  CreateProject: { projectName: string };
  Logout: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="MyProjects"
      defaultScreenOptions={{
        headerShown: true,
        swipeEnabled: false,
      }}
    >
      <Drawer.Screen name="MyProjects" component={ProjectNavigation} />
      <Drawer.Screen name="CreateProject" component={NewProject} />
      <Drawer.Screen name="Logout" component={LogIn} />
    </Drawer.Navigator>
  );
}
