import React from "react";

const HighlightSection = ({ children, onClick, active }) => {
  return (
    <div className="section" onClick={onClick}>
      <p>{children}</p>
      <div className="symbol">{active ? "-" : "+"}</div>
    </div>
  );
};

export default HighlightSection;
