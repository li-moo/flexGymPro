import React from "react";
import style from "./Header.module.css";

function Header() {
  // const text = document.createTextNode(\u00a0);
  // SVGGeometryElement.appendChild(text);

  return (
    <>
      <div className={style.st01}>
        <div className={style.logo}>
          <h2 className={style.mainLogo}>FLEXGYMPRO</h2>
          <h6 className={style.subLogo}>S M A R T .T O U C H.  S T S Y E M</h6>
        </div>
      </div>
      <div> 헤더</div>
    </>
  );
}

export default Header;