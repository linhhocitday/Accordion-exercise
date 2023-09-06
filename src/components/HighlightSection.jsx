import React from "react";

const HighlightSection = ({ children, onClick }) => {
  return (
    <div className="section" onClick={onClick}>
      <p>{children}</p>
      <div className="symbol">+</div>
    </div>
  );
};

export default HighlightSection;
