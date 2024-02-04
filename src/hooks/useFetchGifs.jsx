import React, { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //todo: el problema es que estabas intentando usar directamente el resultado de una función asíncrona (getGifs) sin esperar a que se completara.
  //!necesitas esperar a que la Promesa se resuelva.
  useEffect(() => {
    const fetchImages = async () => {
      const gifs = await getGifs(category);
      setImages(gifs);
      setIsLoading(false);
    };
    fetchImages();
  }, []);

  return { images, isLoading };
};

export default useFetchGifs;
