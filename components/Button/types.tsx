import { FormEvent, ReactNode} from "react";
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from "react-native";

export interface ButtonProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress: ((e?: FormEvent<HTMLFormElement> | undefined) => void) | undefined;
}