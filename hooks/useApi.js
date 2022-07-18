import { useEffect, useState } from 'react';

/**
 * a hook to provide access to an api endpoint
 * this allows ui components to access api data without having to useEffect
 * This could be fully replaced by using redux or something. Context could work fine too.
 * @param {string} route - the api route without /api/ in it
 * @param {object} params - params you can pass to override default fetch params
 */
export default function useApi(route, params) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    if (!route) {
      return;
    }
    setIsLoading(true);
    const fetchData = async () => {
      const apiParams = params ?? {};
      const response = await fetch(`/api/${route}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        ...apiParams,
      });

      if (!response.ok) {
        setError(response.error);
      } else {
        const responseData = await response.json();
        setData(responseData);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [route, params]);
  return {
    isLoading,
    data,
    error,
  };
}
