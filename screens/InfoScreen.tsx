import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GlobalButton from "../components/GlobalButton";
import BigText from "../components/Texts/BigText";
import MediumText from "../components/Texts/MediumText";
import { styles } from "../styles";
import { RootStackParamList } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


type Props = NativeStackScreenProps<RootStackParamList, "Info">;

export default function Info({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <BigText>About</BigText>
      <BigText>SlideShow Composer</BigText>
      <MediumText>Authors: Tom, Fredrik and Alann</MediumText>
      <MediumText>Created: September 2022</MediumText>
      <MediumText>Stack: Expo, Typescript, React-native</MediumText>
      <View style={styles.mb40}>
        <GlobalButton
          text="Find Us"
          onPress={() => navigation.navigate("Map")}
        />
      </View>
    </View>
  );
}
