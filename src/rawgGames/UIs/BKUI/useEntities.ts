import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import { FetchRawg } from "./entitys";
import DataServices from "../../../httpServices";
import { GameQuery } from "../../../App";
import { Search } from "grommet-icons";

const useEntity = <T>(endpoint: string, gamesQuery?: GameQuery) => {
  const dataServices = new DataServices<T>(endpoint);
  const [result, setResult] = useState<T[]>([]);
  const [errors, setError] = useState("");
  const [Loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(false);
    const { result, cancel } = dataServices.getAll<FetchRawg<T>>({
      params: {
        genres: gamesQuery?.genre || [],
        platforms: gamesQuery?.platform || [],
        ordering: gamesQuery?.sorts || [],
        search: gamesQuery?.search || [],
      },
    });
    result
      .then((res) => setResult(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoaded(true));
  }, [
    gamesQuery?.genre,
    gamesQuery?.sorts,
    gamesQuery?.platform,
    gamesQuery?.search,
  ]);
  return { result, errors, Loaded };
};

export default useEntity;
