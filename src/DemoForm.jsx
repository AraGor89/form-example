import React from "react";
import { reduxForm, Field } from "redux-form";
import validate from "./validate";
import { RenderInput, renderSelect, renderСheckbox } from "./inputTypes";
import { countries } from "./countries";

let DemoForm = ({ handleSubmit, submitting, alertData }) => {
  return (
    <form onSubmit={handleSubmit(alertData)} className="submissionForm">
      <Field name="firstName" component={RenderInput} label="First name" />
      <Field name="lastName" component={RenderInput} label="Last name" />
      <Field name="email" component={RenderInput} label="Email" />
      <Field name="country" component={renderSelect} label="Country">
        <option />
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </Field>
      <Field name="rememberMe" component={renderСheckbox} label="Remember me" />
      <button type="submit" disabled={submitting}>
        Submit
      </button>
    </form>
  );
};

DemoForm = reduxForm({
  form: "demo",
  destroyOnUnmount: false,
  validate,
})(DemoForm);
export default DemoForm;
