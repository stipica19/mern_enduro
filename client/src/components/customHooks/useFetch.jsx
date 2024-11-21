import { useState, useEffect, useCallback } from "react";

function useFetch(skip) {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [isEnd, setIsEnd] = useState(false);

  const getPhotos = useCallback(async () => {
    if (isEnd) {
      console.log("No more photos to load. Skipping request.");
      return; // Prekini funkciju ako nema više slika
    }
    const controller = new AbortController();
    const signal = controller.signal;

    try {
      setLoading(true);

      const response = await fetch(`api/index/getPhoto/?skip=${skip}`, {
        signal,
      });
      const data = await response.json();
      console.log(data);
      if (!Array.isArray(data) || data.length === 0) {
        setIsEnd(true); // Označi kraj galerije
        setLoading(false);
        return;
      }

      // Osiguraj jedinstvenost slika
      setPhotos((prev) => {
        const combined = [...prev, ...data.reverse()];
        const unique = Array.from(
          new Set(combined.map((photo) => photo._id))
        ).map((id) => combined.find((photo) => photo._id === id));
        return unique;
      });
      setLoading(false);
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error(err);
      }
      setLoading(false);
    }

    return () => controller.abort();
  }, [skip, isEnd]);

  useEffect(() => {
    if (!isEnd) {
      getPhotos(); // Pozovi `getPhotos` samo ako `isEnd` nije true
    }
  }, [getPhotos, isEnd]);

  return { loading, photos, isEnd };
}

export default useFetch;
