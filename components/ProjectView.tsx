import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { useProject } from "../contexts/ProjectContext";
import { DrawerParamList } from "../Navigation/Drawer/DrawerNagivator";
import RegularButton from "./Button/RegularButton";
import RegularText from "./Texts/RegularText";

type Props = NativeStackScreenProps<DrawerParamList, "Projects">;

export default function ProjectView({ navigation }: Props) {
  const { projects } = useProject();

  return projects.length <= 0 ? (
    <View>
      <RegularText
        children={
          "You don't have any projects, head to Create new project if you wish to create a new one!"
        }
      />
      <RegularButton
        children={"Create new project"}
        onPress={() => navigation.navigate("ProjectName")}
      />
    </View>
  ) : (
    <View>
      <RegularText children={"Your projects to be shown here"} />
    </View>
  );
}
