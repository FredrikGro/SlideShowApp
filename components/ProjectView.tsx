import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { useProject } from "../contexts/ProjectContext";
import { DrawerParamList } from "../Navigation/Drawer/DrawerNagivator";
import { styles } from "../styles";
import RegularButton from "./Button/RegularButton";
import SmallButton from "./Button/SmallButton";
import BigText from "./Texts/BigText";
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
        <View
          key={project.id}
          style={[styles.mb40, styles.fdRow, { position: "relative" }]}
        >
          <RegularButton
            onPress={() => navigation.navigate("SlideShow", { project })}
            style={{ height: 80 }}
          >
            <BigText children={project.projectName} />
          </RegularButton>
          <View>
            <SmallButton
              children={<MaterialIcons name="delete" size={20} color="black" />}
              onPress={() => removeFromProjects(project)}
              style={styles.deleteProjectButton}
            />
            <SmallButton
              children={<MaterialIcons name="edit" size={20} color="black" />}
              onPress={undefined}
              style={styles.editProjectButton}
            />
          </View>
        </View>
      ))}
    </View>
  );
}
