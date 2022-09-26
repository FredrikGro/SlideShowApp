import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Formik } from "formik";

import StylesTextInput from "../components/Input/StylesTextInput";
import RegularButton from "../components/Button/RegularButton";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Formik
      initialValues={{ email: "", fullName: "", password: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          {/*       <Text>Sign In</Text> */}
          <StylesTextInput
            label="Email adress"
            icon="email-variant"
            value={email}
            onChangeText={setEmail}
            placeholder="martin@mail.com"
            keyboardType="email-address"
            style={{ marginBottom: 20 }}
          />
          <StylesTextInput
            label="Full Name"
            icon="account"
            value={fullName}
            onChangeText={setFullName}
            placeholder="Martin Nilsson"
            style={{ marginBottom: 20 }}
          />
          <StylesTextInput
            label="Password"
            icon="lock-open"
            value={password}
            onChangeText={setPassword}
            placeholder="**********"
            isPassword={true}
            style={{ marginBottom: 20 }}
          />
          <StylesTextInput
            label="Repeat Password"
            icon="lock-open"
            value={password}
            onChangeText={setPassword}
            placeholder="**********"
            isPassword={true}
            style={{ marginBottom: 20 }}
          />
          <RegularButton onPress={() => alert("You account has been created!")}>
            Sign In
          </RegularButton>
          <StatusBar style="auto" />
        </View>
      )}
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
