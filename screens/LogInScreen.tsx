import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Formik } from "formik";
import { StyleSheet, View } from "react-native";
import { RootStackParamList } from "../App";
import RegularButton from "../components/Button/RegularButton";
import StylesTextInput from "../components/Input/StylesTextInput";
import { LogInValidationSchema } from "../components/LogInValidationSchema";
import { useProject } from "../contexts/ProjectContext";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function LogIn({ navigation }: Props) {
  const { setEmailAsKey } = useProject();

  return (
    <Formik
      validationSchema={LogInValidationSchema}
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values, formikActions) => {
        setEmailAsKey(values.email);
        navigation.navigate("HomeDrawer");
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
