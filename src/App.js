import React from "react";
import "./App.scss";
import DemoForm from "./DemoForm";

const alertData = (values) => {
  setTimeout(() => {
    alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  }, 1000);
};
function App(props) {
  return <DemoForm alertData={alertData} />;
}

export default App;
