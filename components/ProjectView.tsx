import React from "react";
import { View } from "react-native";
import { useProject } from "../contexts/ProjectContext";
import { styles } from "../styles";
import RegularText from "./Texts/RegularText";

export default function ProjectView() {
  const { projects } = useProject();

  return projects.length <= 0 ? (
    <View style={styles.container}>
      <RegularText
        children={
          "You don't have any projects, head to New Project if you wish to create a new one!"
        }
      />
    </View>
  ) : (
    <View style={styles.container}>
      <RegularText children={"Your projects to be shown here"} />
    </View>
  );
}
