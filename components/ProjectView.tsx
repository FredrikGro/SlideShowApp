import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { useProject } from "../contexts/ProjectContext";
import { DrawerParamList } from "../Navigation/Drawer/DrawerNagivator";
import { styles } from "../styles";
import RegularButton from "./Button/RegularButton";
import { Project } from "./Models";
import RegularText from "./Texts/RegularText";

type Props = NativeStackScreenProps<DrawerParamList, "Projects">;

export default function ProjectView({ navigation }: Props) {
  const { projects, addToProjects, setEmailAsKey } = useProject(); // Remove addToProjects & setEmail before launching

  return projects.length <= 0 ? (
    <View style={[styles.containerTop, styles.pt40]}>
      <RegularText
        style={styles.mb40}
        children={
          "You don't have any projects,\nhead to New Project if you wish to create a new one!"
        }
      />
      <RegularButton
        children={"Set email to 'test@email.com'"}
        onPress={() => setEmailAsKey("test@email.com")}
        style={styles.mb40}
      />
      <RegularButton
        children={"Add a new project temporary"}
        onPress={() => {
          let newP: Project = {
            id: (projects.length + 1).toString(),
            userEmail: "test@email.com",
            projectName: "Testing",
            imagesURI: [
              "https://picsum.photos/200/300?random=1",
              "https://picsum.photos/200/300?random=2",
              "https://picsum.photos/200/300?random=3",
              "https://picsum.photos/200/300?random=4",
            ],
          };
          addToProjects(newP);
        }}
      />
    </View>
  ) : (
    <View style={[styles.containerTop, styles.pt40]}>
      <RegularText
        style={styles.mb40}
        children={"Your projects are shown here"}
      />
      {projects.map((project) => (
        <View key={project.id} style={styles.mb40}>
          <RegularButton
            onPress={() => navigation.navigate("SlideShow", { project })}
          >
            <RegularText children={project.projectName} />
          </RegularButton>
        </View>
      ))}
    </View>
  );
}
