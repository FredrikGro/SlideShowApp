import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Formik } from "formik";
import { StyleSheet, View } from "react-native";
import { RootStackParamList } from "../App";
import RegularButton from "../components/Button/RegularButton";
import StylesTextInput from "../components/Input/StylesTextInput";
import { SignInValidationSchema } from "../components/SignInValidationSchema";
import { useProject } from "../contexts/ProjectContext";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function SignIn({ navigation }: Props) {
  const { setEmailAsKey } = useProject();

  return (
    <Formik
      validationSchema={SignInValidationSchema}
      initialValues={{
        email: "",
        fullName: "",
        password: "",
        confirmPassword: "",
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
        const { email, fullName, password, confirmPassword } = values;
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
              label="Full Name"
              icon="account"
              value={fullName}
              error={touched.fullName && errors.fullName}
              onChangeText={handleChange("fullName")}
              onBlur={handleBlur("fullName")}
              placeholder="Martin Nilsson"
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
            <StylesTextInput
              label="ConfirmPassword"
              icon="lock-open"
              value={confirmPassword}
              error={touched.confirmPassword && errors.confirmPassword}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              placeholder="**********"
              isPassword={true}
              style={{ marginBottom: 20 }}
            />
            <RegularButton onPress={handleSubmit}>Sign In</RegularButton>
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
