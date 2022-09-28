import { StyleSheet, Text, View } from "react-native";
import ImagesPicker from "../components/ImagesPicker";
import { useRoute } from "@react-navigation/native";

export default function NewProject() {
  const route = useRoute();
  const { projectName } = route.params as { projectName: string };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>{projectName}</Text>
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
