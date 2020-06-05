import React from "react";

const createRenderer = (render) => ({ input, meta, label, ...rest }) => {
  let hasError = meta.error && meta.touched;
  return (
    <div
      className={[
        "inputsContainer",
        hasError ? "error" : "",
        meta.active ? "active" : "",
      ].join(" ")}
    >
      <label>{label}</label>
      {render(input, label, rest)}
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export default createRenderer;
