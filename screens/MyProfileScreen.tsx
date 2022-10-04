import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerParamList } from "../Navigation/Drawer/DrawerNagivator";
import React from "react";
import { StyleSheet, View} from "react-native";
import RegularText from "../components/Texts/RegularText";
import { useProject } from "../contexts/ProjectContext";
import { MaterialIcons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<DrawerParamList, "MyProfile">;

export default function MyProfile() {
  const { email } = useProject();
  const showEmail = email.replace("_", "@");

  return (
    <View style={styles.container}>
      <MaterialIcons name="email" size={24} color="black" />
      <RegularText>{showEmail}</RegularText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
