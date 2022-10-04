import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { useProject } from "../contexts/ProjectContext";
import { DrawerParamList } from "../Navigation/Drawer/DrawerNagivator";
import { styles } from "../styles";
import RegularButton from "./Button/RegularButton";
import SmallButton from "./Button/SmallButton";
import RegularText from "./Texts/RegularText";

type Props = NativeStackScreenProps<DrawerParamList, "Projects">;

export default function ProjectView({ navigation }: Props) {
  const { projects, removeFromProjects } = useProject();

  return projects.length <= 0 ? (
    <View style={[styles.containerTop, styles.pt40]}>
      <RegularText
        style={styles.mb40}
        children={
          "You don't have any projects,\nhead to New Project if you wish to create a new one!"
        }
      />
      <RegularButton
        children={"Create new project!"}
        onPress={() => navigation.navigate("ProjectName")}
      />
    </View>
  ) : (
    <View style={[styles.containerTop, styles.pt40]}>
      <RegularText
        style={styles.mb40}
        children={"Your projects are shown here"}
      />
      {projects.map((project) => (
        <View key={project.id} style={[styles.mb40, styles.fdRow]}>
          <RegularButton
            onPress={() => navigation.navigate("SlideShow", { project })}
          >
            <RegularText children={project.projectName} />
          </RegularButton>
          <SmallButton
            children={"A"}
            onPress={() => removeFromProjects(project)}
            style={{ width: 30, backgroundColor: "#BB2222" }}
          />
        </View>
      ))}
    </View>
  );
}
