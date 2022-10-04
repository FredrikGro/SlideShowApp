import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerParamList } from "../Navigation/Drawer/DrawerNagivator";
import React from "react";
import { View } from "react-native";
import MediumText from "../components/Texts/MediumText";
import { useProject } from "../contexts/ProjectContext";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "../styles";

type Props = NativeStackScreenProps<DrawerParamList, "MyProfile">;

export default function MyProfile() {
  const { email } = useProject();
  const showEmail = email.replace("_", "@");
  const { numberOfProjects } = useProject();

  return (
    <View style={styles.container}>
      <View style={styles.mb40}>
        <MaterialIcons
          style={{ alignSelf: "center" }}
          name="email"
          size={30}
          color="black"
        />
        <MediumText>{showEmail}</MediumText>
      </View>
      <View style={styles.mb40}>
        <MaterialIcons
          style={{ alignSelf: "center" }}
          name="collections"
          size={30}
          color="black"
        />
        <MediumText>Number Of Projects: {numberOfProjects()}</MediumText>
      </View>
    </View>
  );
}
