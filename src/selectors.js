import { createSelector } from "reselect";

const selectAllPets = state => state.pets.data;

export const selectAllDogs = createSelector(
  selectAllPets,
  allPets => {
    console.log("all");
    return allPets.filter(pet => pet.type === "dog");
  }
);

export const selectAllCats = createSelector(
  selectAllPets,
  allPets => {
    console.log("selectAllCats");
    return allPets.filter(pet => pet.type === "cat");
  }
);

export const SelectDogsAndCats = createSelector(
  [selectAllDogs, selectAllCats],

  (dogs, cats) => {
    console.log("SelectDogsAndCats");
    return [...dogs, ...cats];
  }
);
