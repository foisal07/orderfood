import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import heroImage from "../../assets/heroimage.png";
import logo from "../../assets/reactfood.png";

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <img src={logo} alt="Foods" />
        <HeaderCartButton />
      </header>
      <div className={classes.container}>
        <div className={classes["main-image"]}>
          <img src={heroImage} alt="Foods" />
          <h1>Delicious Food, Delivered To You</h1>
        </div>
      </div>
    </>
  );
}
