import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DelayedData from './DelayedData';
import React from 'react';

const queryClient = new QueryClient();

export default function App2()
    return (
        <QueryClientProvider client={queryClient}>
            <DelayedData/>
        </QueryClientProvider>
    )
}
