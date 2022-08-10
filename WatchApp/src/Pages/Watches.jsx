import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Filter from "../Components/Filter";
import { getData } from "../Redux/AppReducer/action";
import WatchCard from "../Components/WatchCard";
import { useSearchParams , useLocation } from "react-router-dom";

const Watches = () => {
  const [params] = useSearchParams();
  const location = useLocation()

  console.log(params.getAll("category"));

  const { isLoading, isError, watches } = useSelector(
    (state) => state.AppReducer
  );

  const dispatch = useDispatch();

  const queryParams = {
    params: {
      category: params.getAll("category"),
    },
  };

  console.log(queryParams);

  useEffect(() => {
    dispatch(getData(queryParams));
  }, [location.search]);

  // console.log(watches);

  return (
    <div style={{ display: "flex" }}>
      <Filter />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "10",
          gap: "10px",
        }}
      >
        {/* Map through the watch list here using WatchCard Component */}

        {watches?.map((el) => (
          <WatchCard data={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default Watches;
