import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BigText from "../components/Texts/BigText";
import MediumText from "../components/Texts/MediumText";

export default function Info() {
  return (
    <View style={styles.container}>
      <BigText>About</BigText>
      <BigText>SlideShow Composer</BigText><BigText></BigText>
      <MediumText>Authors: Tom, Fredrik and Alann</MediumText>
      <MediumText>Created: September 2022</MediumText>
      <MediumText>Stack: Expo, Typescript, React-native</MediumText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
