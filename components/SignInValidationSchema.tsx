import * as yup from "yup";

export const SignInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  fullName: yup
    .string()
    .min(3, "Please enter your full name")
    .required("Full name is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm your password")
    .equals([yup.ref("password")], "Password does not match"),
});
