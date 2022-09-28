import React, { ReactNode, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import GlobalButton from "../components/GlobalButton";

export default function ProjectName() {
  const [projectName, setProjectName] = useState("");

  return (
    <View style={styles.container}>
      <Text>Add Project Name</Text>
      <TextInput
        value={projectName}
        placeholder="Project Name..."
        onChangeText={(val) => setProjectName(val)}
        style={styles.input}
      />
      <GlobalButton onPress={() => console.log("Pressed")} text="Submit" />
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
