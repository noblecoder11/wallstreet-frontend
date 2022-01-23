import React from "react";
import "./Rule.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Rule = (props) => {
  return (
    <>
      <div className="rule_container">{"◾" + props.rule.rule}</div>
    </>
  );
};
export default Rule;
