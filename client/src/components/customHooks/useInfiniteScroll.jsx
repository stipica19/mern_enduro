import { useState, useRef, useCallback, useEffect } from "react";

function useInfiniteScroll(isEnd) {
  const [skip, setSkip] = useState(1);
  const loadMoreRef = useRef(null);

  const handleObserver = useCallback(
    (entries) => {
      const [target] = entries;
      if (isEnd) {
        console.log("End reached, stopping observer");
        return; // Prekini ako je kraj
      }
      if (target.isIntersecting) {
        setSkip((prev) => prev + 5);
      }
    },
    [isEnd] // Provjerava uvijek najnoviju vrijednost `isEnd`
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);

    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [handleObserver]);

  return { loadMoreRef, skip };
}

export default useInfiniteScroll;
