import isValidEmail from "sane-email-validation";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "is Required";
  }
  if (!values.lastName) {
    errors.lastName = "is Required";
  }
  if (!values.email) {
    errors.email = "is Required";
  } else if (!isValidEmail(values.email)) {
    errors.email = "is Invalid";
  }
  if (!values.province) {
    errors.province = "is Required";
  }
  return errors;
};
export default validate;
