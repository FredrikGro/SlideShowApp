import React from "react";
import { View } from "react-native";
import RegularButton from "./Button/RegularButton";
import RegularText from "./Texts/RegularText";

export default function ProjectView() {
  const { projects: [] } = useProject();

  return (
    {projects.length <= 0} ? (
        <View>
            <RegularText children={"You don't have any projects, head to Create new project if you wish to create a new one!"} />
            <RegularButton children={"Create new project"} onPress={undefined} />
        </View>
    ) : (
        <View></View>
    )
  )
}
