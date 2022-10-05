import { MaterialIcons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import * as React from "react";
import { colors } from "../../components/colors";
import { Project } from "../../components/Models";
import MyProfile from "../../screens/MyProfileScreen";
import NewProject from "../../screens/NewProjectScreen";
import ProjectName from "../../screens/ProjectNameScreen";
import ProjectNavigation from "../../screens/ProjectNavigationScreen";
import Projects from "../../screens/ProjectsScreen";
import SlideShow from "../../screens/SlideShowScreen";

const { primary } = colors;

export type DrawerParamList = {
  HomeDrawer: undefined;
  Logout: undefined;
  Map: undefined;
  NewProject: { projectName: string; projectId?: string };
  ProjectNavigation: undefined;
  Projects: undefined;
  ProjectName: undefined | { project: Project };
  SlideShow: { project: Project };
  MyProfile: undefined;
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
          },
        };
        return (
          <DrawerContentScrollView {...filteredProps}>
            <DrawerItemList {...filteredProps} />
            <DrawerItem
              icon={() => (
                <MaterialIcons name="logout" size={24} color="black" />
              )}
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
          drawerItemStyle: { display: "none" },
          headerStyle: {
            backgroundColor: primary,
          },
        }}
      />
      <Drawer.Screen
        name="SlideShow"
        component={SlideShow}
        options={{
          title: "SlideShow for my project",
          drawerIcon: () => {
            return <MaterialIcons name="folder" size={24} color="black" />;
          },
          drawerItemStyle: { display: "none" },
          headerStyle: {
            backgroundColor: primary,
          },
        }}
      />
      <Drawer.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          title: "My profile",
          drawerIcon: () => {
            return <MaterialIcons name="account-box" size={24} color="black" />;
          },
          headerStyle: {
            backgroundColor: primary,
          },
        }}
      />
    </Drawer.Navigator>
  );
}
