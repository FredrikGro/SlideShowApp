import { StyleSheet, Text, View } from "react-native";
import GlobalButton from "../components/GlobalButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { styles } from "../styles";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function ProjectNavigation({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.mb40}>
        <GlobalButton
          text=" + New Project"
          onPress={() => navigation.navigate("ProjectName")}
        />
      </View>
      <View style={styles.mb40}></View>
      <GlobalButton
        text=" Open Project"
        onPress={() => navigation.navigate("Projects")}
      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   container2: {
//     flex: 1,
//     padding: 5,
//   },
// });
