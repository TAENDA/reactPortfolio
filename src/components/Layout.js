import React from "react";
import Header from "../components/Header";

export default function Layout(props) {
  return (
    <div className="mi-wrapper">
      <Header />
      {props.children}
    </div>
  );
}

