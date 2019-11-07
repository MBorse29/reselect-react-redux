import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAllDogs, SelectDogsAndCats } from "./selectors";

const PetsContainer = () => {
  const dogs = useSelector(selectAllDogs);
  const dogsAndCats = useSelector(SelectDogsAndCats);
  const types = { dogs, dogsAndCats };

  const [currentSelection, setSelection] = useState("dogs");

  useEffect(() => {
    console.log(dogsAndCats);
  }, [dogs, dogsAndCats]);

  return (
    <div>
      <button
        onClick={() => {
          setSelection(currentSelection === "dogs" ? "dogsAndCats" : "dogs");
        }}
      >
        Change Selector
      </button>
      <pre>{JSON.stringify(types[currentSelection], null, 2)}</pre>
    </div>
  );
};

export default PetsContainer;
