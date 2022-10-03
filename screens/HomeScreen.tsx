import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, View } from "react-native";
import { RootStackParamList } from "../App";
import { styles } from "../styles";
import GlobalButton from "../components/GlobalButton";
import * as Device from "expo-device";
import SmallText from "../components/Texts/SmallText";
import { Audio } from "expo-av";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: Props) {
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Jingle.mp3")
    );

    await sound.playAsync();
  }
  playSound();

  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", top: 20 }}>
        <SmallText>{Device.deviceName}</SmallText>
      </View>
      <View style={styles.mb40}>
        <GlobalButton
          text="Log In"
          onPress={() => navigation.navigate("LogIn")}
        />
      </View>
      <View style={styles.mb40}>
        <GlobalButton
          text="Sign In"
          onPress={() => navigation.navigate("SignIn")}
        />
      </View>
    </View>
  );
}
