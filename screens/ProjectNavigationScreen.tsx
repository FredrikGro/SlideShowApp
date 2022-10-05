import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { DrawerParamList } from "../Navigation/Drawer/DrawerNagivator";
import { styles } from "../styles";
import RegularButton from "../components/Button/RegularButton";

type Props = NativeStackScreenProps<DrawerParamList, "ProjectNavigation">;

export default function ProjectNavigation({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.mb40}>
        <RegularButton onPress={() => navigation.navigate("ProjectName")}>
          + New Project"
        </RegularButton>
      </View>
      <View style={styles.mb40}></View>
      <RegularButton onPress={() => navigation.navigate("Projects")}>
        Open Project
      </RegularButton>
    </View>
  );
}
