import React from "react";
import { View } from "react-native";
import { useProject } from "../contexts/ProjectContext";
import RegularText from "./Texts/RegularText";

export default function ProjectView() {
  const { projects } = useProject();

  return projects.length <= 0 ? (
    <View>
      <RegularText
        children={
          "You don't have any projects, head to New Project if you wish to create a new one!"
        }
      />
    </View>
  ) : (
    <View>
      <RegularText children={"Your projects to be shown here"} />
    </View>
  );
}
