import {useQuery} from '@tanstack/react-query';
import React from 'react';

type ResponseValue = {
    message: string
    time: string
}

export default function DelayedData() {
    const { data } = useQuery<ResponseValue>({
        queryKey: ['delay'],
        queryFn: async () => (await fetch('https://api.heropy.dev/v0/delay?t=1000')).json(),
        staleTime: 1000 * 10 // 10초
    })

    return <div>{data?.time}</div>
}