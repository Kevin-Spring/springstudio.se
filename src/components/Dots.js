import React from "react";
import { VscCircleFilled } from "react-icons/vsc";

export const Dots = ({ title, id }) => {
  return (
    <div className="dot">
      <span>{title}</span>
      <VscCircleFilled />
    </div>
  );
};
