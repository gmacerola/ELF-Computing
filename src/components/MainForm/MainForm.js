import React from "react";
import Features from "../Features/Features";

export default function MainForm(props) {
  const { currencyFormat } = props;
  return (
    <div>
      <Features
        {...props}
        currencyFormat={currencyFormat}
        updateFeature={props.updateFeature}
      />
    </div>
  );
}
