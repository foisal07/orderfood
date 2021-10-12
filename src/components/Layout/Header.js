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
      <div className={classes["main-image"]}>
        <h1>
          Delicious Food,
          <br />
          Delivered To You
        </h1>
        <img src={heroImage} alt="Foods" />
      </div>
    </>
  );
}
