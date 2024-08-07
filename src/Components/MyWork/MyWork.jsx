import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/pattern_theme2.svg";
import Mywork_data from "../../assets/mywork_data";
import arrow_img from "../../assets/arrow_img.svg";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-tittle">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {Mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_img} alt=""/>
      </div>
    </div>
  );
};

export default MyWork;
