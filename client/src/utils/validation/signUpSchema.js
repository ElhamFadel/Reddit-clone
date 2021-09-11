import * as yup from "yup";
const schema = () => {
  return yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(20, "Password must be less than 20 characters long")
      .required("Password is required"),
  });
};
export default schema;
