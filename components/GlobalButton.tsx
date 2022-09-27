import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
  text: string;
  onPress: () => void;
}

export default function GlobalButton({ text, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.pressable}>
      <Text style={{ color: "white" }}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 25,
    backgroundColor: "#2196F3",
    padding: 10,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 5 },
  },
});
