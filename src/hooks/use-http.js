import { useCallback, useState } from "react";

const useHttp = (requestFunction) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (resolveFunction, config) => {
      setIsLoading(true);
      try {
        const data = await requestFunction(config && config);
        resolveFunction(data);
      } catch (er) {
        setError(er.message);
      }
      setIsLoading(false);
    },
    [requestFunction]
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
