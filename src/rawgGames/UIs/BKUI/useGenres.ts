import React from "react";
import useEntity from "./useEntities";
import { Genre } from "./entitys";
import data from "./genreData";

const useGenre = () => {
  const { Loaded, errors } = useEntity<Genre>("/genres");
  const result = data;
  return { result, Loaded: true, errors: null };
};

export default useGenre;
