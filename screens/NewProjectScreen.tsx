import { StyleSheet, Text, View } from "react-native";
import ImagesPicker from "../components/ImagesPicker";

export default function NewProject() {
  return (
    <View style={styles.container}>
      <Text>New Project</Text>
      <ImagesPicker />
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
