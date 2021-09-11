import React from "react";
import { useStore } from "../center-data/context";
import {
  signUpSchema,
  checkValidation,
  loginSchema,
} from "../utils/validation";

function useForm() {
  const [{ user, error }, dispatch] = useStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    checkValidation(signUpSchema, user)
      .then((res) => {
        //go ahead
      })
      .catch((err) => {
        err.inner.forEach(({ path, message }) => {
          dispatch({
            type: "SET_ERROR",
            payload: {
              field: path,
              msg: message,
            },
          });
        });
      });
  };
  return { handleSubmit };
}

export default useForm;
