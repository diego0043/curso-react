import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
//const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  // definimos tipo de dato en el useState
  const [searches, setSearches] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);
  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    const recurrent_term = term.trim().toLowerCase();
    if (gifsCache.current[recurrent_term]) {
      setGifs(gifsCache.current[recurrent_term]);
      return;
    }
    const gifs = await getGifsByQuery(recurrent_term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string) => {
    const parseQuery = query.trim().toLowerCase();
    const exist_term = searches.includes(query);

    if (parseQuery != "" && searches.length < 8 && exist_term == false) {
      setSearches([parseQuery, ...searches]);
      const gifs = await getGifsByQuery(query);
      setGifs(gifs);
      gifsCache.current[query] = gifs;
    }
  };
  return {
    // Values
    searches,
    gifs,

    // Methods
    handleTermClicked,
    handleSearch,
  };
};
