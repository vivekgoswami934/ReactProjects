import React from "react";
import Pagination from "@mui/material/Pagination";
import { usePagination } from "../Hooks/pagination";
import { width } from "@mui/system";

const Pages = ({ data }) => {
  // //   const { totalPages, startPageIndex, endPageIndex, displayPageFunc } =
  //   console.log(  usePagination(5, data.length))

  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPageFunc,
  ] = usePagination(5, data.length);
  return (
    <div>
      {(() => {
        console.log("start");
        const displayPosts = [];

        for (let i = startPageIndex; i <= endPageIndex; i++) {
          displayPosts.push(
            <div key={data[i].id} style={{width:"70%",margin:"auto"}}>
              <h3>
                <span >{i + 1} {data[i].title} </span> 
              </h3>
              <p>{data[i].body}</p>
            </div>
          );
        }

        return displayPosts;
      })()}

      <Pagination
        color="primary"
        count={totalPages}
        onChange={(e, value) => displayPageFunc(value)
        }
      />
    </div>
  );
};

export default Pages;
