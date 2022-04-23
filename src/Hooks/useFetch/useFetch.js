/**
 *  fetches data from a given URL and returns the data, a loading state, and an error state
 * @param request - The URL to fetch.
 * @param payload - This is an object that contains the following properties:
 * @returns An array with 3 elements.
 */
import React, { useState, useEffect } from "react";

const useFetch = (request, payload) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setError(null);
    const abortController = new AbortController();

    (async () => {
      setLoading(true);
      const response = await fetch(request, {
        ...payload,
        signal: abortController.signal,
      }).catch((err) => {
        err.code !== 20 && setError(err);
      });

      if (response && isMounted) {
        if (response.status >= 400 && response.status < 600) {
          setError(response);
        } else {
          setData(await response.json());
        }
      }
      setLoading(false);
    })();

    const clean = () => {
      isMounted = false;
      abortController.abort();
    };
    return clean;
  }, [request, payload]);

  return [data, loading, error];
};

export default useFetch;
