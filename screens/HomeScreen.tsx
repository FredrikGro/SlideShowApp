import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, View } from "react-native";
import { RootStackParamList } from "../App";
import { styles } from "../styles";

import SmallButton from "../components/Button/SmallButton";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.mb40}>
        <SmallButton onPress={() => navigation.navigate("LogIn")}>
          Log In
        </SmallButton>
      </View>
      <View style={styles.mb40}>
        <SmallButton onPress={() => navigation.navigate("SignIn")}>
          Sign In
        </SmallButton>
      </View>
    </View>
  );
}
