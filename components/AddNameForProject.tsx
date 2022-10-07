import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Formik } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DrawerParamList } from "../Navigation/Drawer/DrawerNagivator";
import RegularButton from "./Button/RegularButton";
import StylesTextInput from "./Input/StylesTextInput";
import { ProjectNameValidationSchema } from "./ProjectNameValidationSchema";

type Props = NativeStackScreenProps<DrawerParamList, "ProjectName">;

export default function AddNameForProject({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>Add Project Name</Text>
      <Formik
        validationSchema={ProjectNameValidationSchema}
        initialValues={{
          projectName: "",
        }}
        onSubmit={(values, { resetForm }) => {
          navigation.navigate("NewProject", { pName: values.projectName });
          resetForm();
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
          return (
            <View style={styles.container}>
              <StylesTextInput
                label="Project Name"
                icon="text"
                value={values.projectName}
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
