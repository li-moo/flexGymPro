import React, { useState, useEffect } from "react";
import style from "./Header.module.css";

function Header() {
  const [todayYMD, setTodayYMD] = useState('');

  useEffect(() => {
    // Get the current date
    const today = new Date();

    // Format the date as Year-Month-Day
    const preDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

    // Update the state with the formatted date
    setTodayYMD(preDate);
  }, []);


  return (
    <>
      <div className={style.st01}>
        <div className={style.logo}>
          <h2 className={style.mainLogo}>FLEXGYMPRO</h2>
          <h6 className={style.subLogo}>S M A R T&nbsp;&nbsp;T O U C H&nbsp;&nbsp;S T S Y E M</h6>
        </div>
        <div className={`${style.blinkingText} ${style.movingText}`}>
          <div>워너짐7(수영구점)&nbsp;</div>
          <div>{todayYMD}&nbsp;</div>
        </div>
      </div>
      <div> 헤더</div>
    </>
  );
}

export default Header;