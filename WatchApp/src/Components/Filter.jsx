import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI

  let [searchParams, setSearchParams] = useSearchParams();

  let initalState = searchParams.getAll("category")

  // console.log(initalState)

  const [category, setCategory] = useState( initalState || []);

  const handleOnChangeGenre = (e) => {
    let value = e.target.value;
    console.log("value",value);
    let newCategory = [...category];

    if (category.includes(value)) {
      newCategory.splice(newCategory.indexOf(value), 1);
    } else {
      newCategory.push(value);
    }

    setCategory(newCategory);

    // setSearchParams(e.target.value);
  };

  useEffect(() => {
    if (category) {
      setSearchParams({ category : category });
    }
  }, [category, setSearchParams]);

  // console.log(searchParams);

  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input
            type="checkbox"
            value="Analog"
            onChange={handleOnChangeGenre}
            defaultChecked={category.includes("Analog")}

          />
          <label>Analog</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Digital"
            onChange={handleOnChangeGenre}
            defaultChecked={category.includes("Digital")}
          />
          <label>Digital</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Chronograph"
            onChange={handleOnChangeGenre}
            defaultChecked={category.includes("Chronograph")}
          />
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
