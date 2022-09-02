import "../page.css";
import React from "react";

const SinglePage = ({ datas }) => {
  console.log(datas.data);
  let { titleType, title, date,data } = datas;
  return (
    <div className="singlePage" style={{marginTop : "3px"}}>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <p>{titleType}</p>
        <p>{date}</p>
      </div>
      <h4>{title}</h4>

      {data.map((el) => {
        return (
          <div key={Date.now()*Math.random()} >
          <span >
            <input type="checkbox" value={el.status}></input>
            <>{el.name}</>
          </span>
          </div>
        );
      })}
    </div>
  );
};

export default SinglePage;

// data: Array(2)
// 0: {status: false, name: 'subtask 1 of 1'}
// 1: {status: false, name: 'subtask 1 of 1'}
// length: 2
// [[Prototype]]: Array(0)
// date: "17-10-2022"
// id: 1
// title: "Main Task 1"
// titleType: "Personal"
