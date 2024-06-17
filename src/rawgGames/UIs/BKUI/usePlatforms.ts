import React from "react";
import useEntity from "./useEntities";
import { Platforms } from "./entitys";
import data from "./platformData";

const usePlatform = () => {
  const {} = useEntity<Platforms>("/platforms");
  const result = data;
  return { result };
};
export default usePlatform;
