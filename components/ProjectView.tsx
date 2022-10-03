import React from "react";
import { View } from "react-native";
import { useProject } from "../contexts/ProjectContext";
import { styles } from "../styles";
import RegularButton from "./Button/RegularButton";
import { Project } from "./Models";
import RegularText from "./Texts/RegularText";

export default function ProjectView() {
  const { projects, addToProjects, setEmailAsKey } = useProject(); // Remove addToProjects & setEmail before launching

  return projects.length <= 0 ? (
    <View style={styles.container}>
      <RegularText
        children={
          "You don't have any projects, head to New Project if you wish to create a new one!"
        }
      />
      <RegularButton
        children={"Set email to 'test@email.com'"}
        onPress={() => setEmailAsKey("test@email.com")}
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
      <RegularText children={"Your projects to be shown here"} />
      {projects.map((project) => (
        <View key={project.id}>
          <RegularButton onPress={() => {}}>
            <RegularText children={project.projectName} />
          </RegularButton>
        </View>
      ))}
    </View>
  );
}
