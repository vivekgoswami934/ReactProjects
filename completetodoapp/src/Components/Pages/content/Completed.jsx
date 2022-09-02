import "../page.css";
import React from "react";
import SinglePage from "./SinglePage";

const Completed = ({ completedArr }) => {
  return (
    <div className="completed">
      <h3>Completed</h3>

      {completedArr.map((elem) => {
        return <SinglePage key={elem.id} datas={elem} />;
      })}
    </div>
  );
};

export default Completed;
