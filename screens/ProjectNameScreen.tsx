import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import RegularButton from "../components/Button/RegularButton";
import StylesTextInput from "../components/Input/StylesTextInput";
import { ProjectNameValidationSchema } from "../components/ProjectNameValidationSchema";
import { DrawerParamList } from "../Navigation/Drawer/DrawerNagivator";

type Props = NativeStackScreenProps<DrawerParamList, "ProjectName">;

export default function ProjectName({ navigation, route }: Props) {
  const [projectName, setProjectName] = useState("");
  const [projectId, setProjectId] = useState("");

  useFocusEffect(
    useCallback(() => {
      const unsubscribe = () => {
        setProjectName("");
        setProjectId("");
      };
      return unsubscribe;
    }, [])
  );

  useEffect(() => {
    if (route.params?.project !== undefined) {
      setProjectName(route.params?.project?.projectName);
      setProjectId(route.params.project.id);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Text>Add Project Name</Text>
      <Formik
        validationSchema={ProjectNameValidationSchema}
        initialValues={{
          projectName: "",
        }}
        onSubmit={(values) => {
          console.log(values.projectName);
          setProjectName(values.projectName);
          console.log(projectName);
          if (route.params?.project !== undefined) {
            navigation.navigate("NewProject", { projectName, projectId });
            navigation.setParams({ project: undefined });
          } else {
            navigation.navigate("NewProject", { projectName });
          }
        }}
      >
        {({
          handleChange,
          handleBlur,
          touched,
          handleSubmit,
          values,
          errors,
        }) => {
          const { projectName } = values;
          return (
            <View style={styles.container}>
              <StylesTextInput
                label="Project Name"
                icon="text"
                value={projectName}
                error={touched.projectName && errors.projectName}
                onChangeText={handleChange("projectName")}
                onBlur={handleBlur("projectName")}
                placeholder="Project Name..."
                style={{ marginBottom: 20 }}
              />
              <RegularButton onPress={handleSubmit}>Submit</RegularButton>
            </View>
          );
        }}
      </Formik>

      {/*  <TextInput
        value={projectName}
        placeholder="Project Name..."
        onChangeText={(val) => setProjectName(val)}
        style={styles.input}
      />
      <RegularButton
        onPress={
          route.params?.project !== undefined
            ? () => {
                navigation.navigate("NewProject", { projectName, projectId });
                navigation.setParams({ project: undefined });
              }
            : () => {
                navigation.navigate("NewProject", { projectName });
              }
        }
      >
        Submit
      </RegularButton> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 280,
  },
});
