import React from "react";
import createRenderer from "./fieldsRenderer";

export const RenderInput = createRenderer((input, label) => (
  <input {...input} placeholder={label} />
));
export const renderSelect = createRenderer((input, label, { children }) => (
  <select {...input}>{children}</select>
));
export const renderСheckbox = createRenderer((input, label) => (
  <input {...input} type="checkbox" />
));
