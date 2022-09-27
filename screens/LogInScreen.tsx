import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Formik } from "formik";

import StylesTextInput from "../components/Input/StylesTextInput";
import RegularButton from "../components/Button/RegularButton";
import { LogInValidationSchema } from "../components/LogInValidationSchema";

export default function LogIn() {
  return (
    <Formik
      validationSchema={LogInValidationSchema}
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values, formikActions) => console.log(values)}
    >
      {({
        handleChange,
        handleBlur,
        touched,
        handleSubmit,
        values,
        errors,
      }) => {
        const { email, password } = values;
        return (
          <View style={styles.container}>
            <StylesTextInput
              label="Email adress"
              icon="email-variant"
              value={email}
              error={touched.email && errors.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              placeholder="martin@mail.com"
              keyboardType="email-address"
              style={{ marginBottom: 20 }}
            />
            <StylesTextInput
              label="Password"
              icon="lock-open"
              value={password}
              error={touched.password && errors.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              placeholder="**********"
              isPassword={true}
              style={{ marginBottom: 20 }}
            />
            <RegularButton onPress={handleSubmit}>Log In</RegularButton>
            <StatusBar style="auto" />
          </View>
        );
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
