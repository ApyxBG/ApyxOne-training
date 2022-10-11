import React from "react";
import { ToggleButton as Switch } from "../styles/Common";
import { FiCheck } from "@react-icons/all-files/fi/FiCheck";
import { GrClose } from "@react-icons/all-files/gr/GrClose";

function ToggleButton({ checked, onClick }) {
  return (
    <Switch checked={checked}>
      <input type="checkbox" checked={checked} onChange={onClick} />
      <span className="slider round"></span>
      <span className="slider_icon d-flex">
        {" "}
        {checked ? (
          <FiCheck width="100%" height="auto"></FiCheck>
        ) : (
          <GrClose color="#fff" width="100%" height="auto"></GrClose>
        )}
      </span>
    </Switch>
  );
}

export default ToggleButton;
