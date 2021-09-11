function checkValidation(schema, values) {
  return schema && schema()?.validate(values, { abortEarly: false });
  // .then(() => console.log("valid"))
  // .catch((err) => {
  //   err.inner.forEach(({ path, message }) => {
  //     console.log(path, message);
  //   });
  // });
}

export default checkValidation;
