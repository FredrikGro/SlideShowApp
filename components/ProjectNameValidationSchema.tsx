import * as yup from "yup";

export const ProjectNameValidationSchema = yup.object().shape({
  projectName: yup
    .string()
    .min(1, "Please enter a project name")
    .required("Project name is Required"),
});
