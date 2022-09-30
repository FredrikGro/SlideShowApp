import { useNavigation } from "@react-navigation/native";
import React, { ReactNode, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import GlobalButton from "../components/GlobalButton";
import { useRoute } from "@react-navigation/native";

export default function ProjectName() {
  const route = useRoute();
  const { email } = route.params as { email: string };
  const [projectName, setProjectName] = useState("");
  const navigation = useNavigation();

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
        onPress={() =>
          navigation.navigate("NewProject", { projectName, email })
        }
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
