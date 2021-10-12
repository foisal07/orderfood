import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import heroImage from "../../assets/heroimage.png";

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>OrderFood</h1>
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
