import {TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../colors";
const {black } = colors;

export default function HeaderMenuButton() {
    return(
                <TouchableOpacity onPress={() => alert("Open menu")}>
                  <MaterialCommunityIcons name="menu" size={30} color={black} />
                </TouchableOpacity>
    );
}