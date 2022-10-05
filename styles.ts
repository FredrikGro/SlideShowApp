import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerTop: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  mb40: {
    marginBottom: 40,
  },
  pt40: {
    paddingTop: 40,
  },
  fdRow: {
    flexDirection: "row",
  },
  deleteProjectButton: {
    width: 30,
    backgroundColor: "#DD2222",
    position: "absolute",
    right: 0,
    top: 40,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  editProjectButton: {
    width: 30,
    backgroundColor: "#4477FF",
    position: "absolute",
    right: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 15,
  },
});
