import React from "react";
import "./App.scss";
import DemoForm from "./DemoForm";

const alertData = (values) => {
  setTimeout(() => {
    alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  }, 1000);
};
function App(props) {
  return (
    <div>
      <h1>Just an example of form validation</h1>
      <DemoForm alertData={alertData} />
    </div>
  );
}

export default App;
