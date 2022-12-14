import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { RootStackParamList } from "../App";
import { styles } from "../styles";
import * as Device from "expo-device";
import { Audio } from "expo-av";
import RegularText from "../components/Texts/RegularText";
import BigText from "../components/Texts/BigText";
import RegularButton from "../components/Button/RegularButton";

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
      <Image
        source={require("../assets/psycadelic.gif")}
        style={imageStyle.bgImage}
      />
      <View style={{ position: "absolute", top: 20 }}>
        <RegularText style={{ color: "white" }}>
          {Device.deviceName}
        </RegularText>
      </View>
      <BigText style={{ color: "white", position: "absolute", top: 40 }}>
        Slideshow Composer
      </BigText>
      <View style={styles.mb40}>
        <RegularButton onPress={() => navigation.navigate("LogIn")}>
          Log In
        </RegularButton>
      </View>
      <View style={styles.mb40}>
        <RegularButton onPress={() => navigation.navigate("SignIn")}>
          Sign In
        </RegularButton>
      </View>
    </View>
  );
}
const imageStyle = StyleSheet.create({
  bgImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute",
  },
});
