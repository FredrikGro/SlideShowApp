import { StyleSheet, Text, View } from "react-native";

export default function NewProject() {
  return (
    <View style={styles.container}>
      <Text>New Project</Text>
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
});