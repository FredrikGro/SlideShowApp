import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, View } from "react-native";
import { RootStackParamList } from "../App";
import { styles } from "../styles";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.mb40}>
        <Button title="Sign In" onPress={() => navigation.navigate("SignIn")} />
      </View>
      <Button title="Log In" onPress={() => navigation.navigate("LogIn")} />
    </View>
  );
}
