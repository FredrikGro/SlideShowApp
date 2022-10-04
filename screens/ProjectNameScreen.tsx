import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerParamList } from "../Navigation/Drawer/DrawerNagivator";
import React, { ReactNode, useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import GlobalButton from "../components/GlobalButton";
import { useRoute } from "@react-navigation/native";

type Props = NativeStackScreenProps<DrawerParamList, "ProjectName">;

export default function ProjectName({ navigation }: Props) {
  const [projectName, setProjectName] = useState("");
  //const navigation = useNavigation();

  useEffect(() => {
    const focusHandler = navigation.addListener("focus", () => {
      setProjectName("");
    });
    return focusHandler;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Add Project Name</Text>
      <TextInput
        value={projectName}
        placeholder="Project Name..."
        onChangeText={(val) => setProjectName(val)}
        style={styles.input}
      />
      <GlobalButton
        onPress={() => navigation.navigate("NewProject", { projectName })}
        text="Submit"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
