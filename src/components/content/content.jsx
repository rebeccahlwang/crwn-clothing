import React from "react";

export const Content = (props) => {
  return (
    <div className="content">
      <h1 className="title">{props.title}</h1>
      <span className="sub-title">{props.subtitle}</span>
    </div>
  );
};
