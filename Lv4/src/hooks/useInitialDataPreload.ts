import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";

const usePreloadAndCacheData = (queryKey: string, fetchData: any) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const fetchAndCacheData = async () => {
      try {
        const response = await fetchData(); // 데이터 가져오는 비동기 함수 호출
        const data = response.data; // 가져온 데이터
        queryClient.setQueryData(queryKey, data); // 데이터를 queryKey로 캐싱
      } catch (error) {
        // 에러 처리
      }
    };

    fetchAndCacheData(); // 데이터 가져와서 캐싱하는 함수 호출
  }, []);

  return useQuery(queryKey, fetchData, {
    initialData: queryClient.getQueryData(queryKey), // 캐시된 데이터를 initialData로 사용합니다.
    keepPreviousData: true, // 이전 데이터를 유지합니다.
  });
};

export default usePreloadAndCacheData;
