import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { styles } from "../styles";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Sign In" onPress={() => navigation.navigate("SignIn")} />
      <Button title="Log In" onPress={() => navigation.navigate("LogIn")} />
    </View>
  );
}
