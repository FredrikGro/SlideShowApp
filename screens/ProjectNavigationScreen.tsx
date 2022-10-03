import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { DrawerParamList } from "../Navigation/Drawer/DrawerNagivator";
import GlobalButton from "../components/GlobalButton";
import { styles } from "../styles";
import { useRoute } from "@react-navigation/native";

type Props = NativeStackScreenProps<DrawerParamList, "ProjectNavigation">;

export default function ProjectNavigation({ navigation }: Props) {
  const route = useRoute();
  const { email } = route.params as { email: string };
  return (
    <View style={styles.container}>
      <View style={styles.mb40}>
        <GlobalButton
          text=" + New Project"
          onPress={() => navigation.navigate("ProjectName", { email })}
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
