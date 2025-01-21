import {queryOptions, useQuery, useQueryClient} from '@tanstack/react-query';

type ResponseValue = {
    message: string
    time: string
}

const options = queryOptions<ResponseValue>({
    queryKey: ['delay'],
    queryFn: async () => {
        const res = await fetch(`https://api.heropy.dev/v0/delay?t=1000`)
        const data = await res.json()
        if(!data.time) {
            throw new Error('문제가 발생했습니다!')
        }
        return data
    },
    staleTime: 1000 * 10, // 10초
    // retry: 1
})


export default function DelayedData({ wait = 1000 } : { wait: number }) {
    const queryClient = useQueryClient();
    const { data, error, isFetching, isPending, isLoading, isStale, refetch } = useQuery(options);

    async function fetchData() {
        console.log("fetchData!");
        
        const data = await queryClient.fetchQuery(options);
        console.log(data);
    }

    function getCachedData() {
        console.log("getCachedData!");

        const data = queryClient.getQueryData(['delay']);
        console.log(data);
    }

    return (
        <>
            {data && <div>{JSON.stringify(data)}</div>}
            {error && <div>{error.message}</div>}
            <div>데이터가 상했나요?: {JSON.stringify(isStale)}</div>
            <button
                disabled={isFetching}
                onClick={fetchData}>
                {isFetching ? '데이터 가져오는 중...' : '데이터 다시 가져오기!'}
            </button>
        </>
    )
}