import * as yup from "yup";
const schema = () => {
  return yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });
};
export default schema;
