import { StyleSheet } from "react-native";
import ProjectView from "../components/ProjectView";

export default function Projects() {
  return <ProjectView />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
