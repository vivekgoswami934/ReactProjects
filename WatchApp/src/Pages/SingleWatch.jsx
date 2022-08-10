import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const SingleWatch = () => {
  const [data, setData] = useState({});

  const { id } = useParams();
  //  console.log(id)

  const getDataSinglePage = () => {
    axios
      .get(`http://localhost:8080/watches?id=${id}`)
      .then((r) => setData(r.data[0]));
  };

  useEffect(() => {
    getDataSinglePage();
  }, []);

  console.log(data);

  return (
    <div  style={{ width: "25%" , margin:"auto" }}>
      <h2>{data.name}</h2>
      <div>
        <img
          src={data.image}
          alt="Cover Pic"
          style={{ height: "300px", width: "250px" }}
        />
      </div>
      <div>
        <div> {data.category} </div>
      </div>
    </div>
  );
};

export default SingleWatch;
