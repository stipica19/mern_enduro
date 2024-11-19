import { useState, useEffect, useCallback } from "react";

function useFetch(skip) {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [isEnd, setIsEnd] = useState(false);

  const getPhotos = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`api/index/getPhoto/?skip=${skip}`);
      const data = await response.json();

      if (data?.length === 0) {
        setIsEnd(true);
        return;
      }

      setPhotos((prev) => [...prev, ...data.reverse()]);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }, [skip]);

  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  return { loading, photos, isEnd };
}

export default useFetch;
