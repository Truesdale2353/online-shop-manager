import { FetchResult } from '@/pages/ProductEditor/types';
import { useState, useEffect } from 'react';


const baseUrl = 'http://localhost:1337/'
const useFetch = <T>(url: string): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const response = await fetch(`${baseUrl}${url}`);
        const json = await response.json();
        setData(json);
        setIsLoading(false);
      } catch (err) {
        console.log(err)
        setError(true);
      }
    };

    fetchData();
  }, [url]);

  return [ data, isLoading, error ];
};

export default useFetch;
