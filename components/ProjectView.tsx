import React from "react";
import { View } from "react-native";
import { useProject } from "../contexts/ProjectContext";
import { styles } from "../styles";
import RegularButton from "./Button/RegularButton";
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
    <View style={[styles.containerTop, styles.pt40]}>
      <RegularText children={"Your projects to be shown here"} />
      {projects.map((project) => (
        <View key={project.id}>
          <RegularButton onPress={() => ({})}>
            <RegularText children={project.projectName} />
          </RegularButton>
        </View>
      ))}
    </View>
  );
}
