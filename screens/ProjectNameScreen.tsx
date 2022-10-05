import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import GlobalButton from "../components/GlobalButton";
import { DrawerParamList } from "../Navigation/Drawer/DrawerNagivator";

type Props = NativeStackScreenProps<DrawerParamList, "ProjectName">;

export default function ProjectName({ navigation }: Props, projectId?: string) {
  const [projectName, setProjectName] = useState("");

  useFocusEffect(
    useCallback(() => {
      const unsubscribe = setProjectName("");
      return () => unsubscribe;
    }, [])
  );

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
