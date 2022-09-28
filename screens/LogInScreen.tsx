import { StyleSheet, Text, View } from "react-native";
import { Formik } from "formik";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";


import StylesTextInput from "../components/Input/StylesTextInput";
import RegularButton from "../components/Button/RegularButton";
import { LogInValidationSchema } from "../components/LogInValidationSchema";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function LogIn({ navigation }: Props) {
  return (
    <Formik
      validationSchema={LogInValidationSchema}
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values, formikActions) =>
        navigation.navigate("ProjectNavigation")
      }
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
