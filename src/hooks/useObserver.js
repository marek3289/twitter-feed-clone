import { useRef, useCallback } from 'react';

export const useObserver = (loading, loadMore, setLoadNumber) => {
  const observer = useRef();

  const lastElement = useCallback(
    (tweet) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && loadMore) {
          setLoadNumber((prevNumber) => prevNumber + 1);
        }
      });
      if (tweet) observer.current.observe(tweet);
    },
    [loading, loadMore, setLoadNumber],
  );

  return { lastElement };
};
