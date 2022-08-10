import React from "react";
import { Link } from "react-router-dom";

const WatchCard = ({ data }) => {      //props.data
  const { id, name, image, category } = data;
  return (
    <Link to={`/watches/${id}`}>
      <div
        data-testid={`watch-card-wrapper-${id}`}
        key={id}
        style={{ border: "3px solid red" }}
      >
        <div>
          <img
            data-testid="watch-card-image"
            src={image}
            alt=""
            style={{ height: "300px", width: "250px" }}
          />
        </div>
        <div>
          <div data-testid="watch-name">{name}</div>
          <div data-testid="watch-category">{category}</div>
        </div>
      </div>
    </Link>
  );
};

export default WatchCard;
