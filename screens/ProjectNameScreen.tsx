import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import AddNameForProject from "../components/AddNameForProject";
import ChangeNameForProject from "../components/ChangeNameForProject";
import { DrawerParamList } from "../Navigation/Drawer/DrawerNagivator";

type Props = NativeStackScreenProps<DrawerParamList, "ProjectName">;

export default function ProjectName({ navigation, route }: Props) {
  return route.params?.project !== undefined ? (
    <ChangeNameForProject navigation={navigation} route={route} />
  ) : (
    <AddNameForProject navigation={navigation} route={route} />
  );
}
