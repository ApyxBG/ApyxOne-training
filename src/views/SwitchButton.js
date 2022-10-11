import React from "react";
import { SwitchButton as Switch } from "../styles/Common";

function SwitchButton({ checked, onClick }) {
  return (
    <Switch checked={checked}>
      <input type="checkbox" checked={checked} onChange={onClick} />
      <span className="slider round"></span>
    </Switch>
  );
}

export default SwitchButton;
