import { useInfiniteQuery } from "@tanstack/react-query"
import React from "react"
import { useCallback, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export interface Page {
    Search: Movie[]
    totalResults: string
    Response: string
}

export interface Movie {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}

export default function MovieList() {
    const [searchText, setSearchText] = useState('');
    const [queryText, setQueryText] = useState('');
    const {ref, inView} = useInView();

    const {
        data,
        isLoading,
        isFetching,
        isFetched,
        hasNextPage,
        fetchPreviousPage,
        fetchNextPage
    } = useInfiniteQuery<Page>({
        queryKey: ['movies', queryText],
        queryFn: async ({pageParam}) => {
            const res = await fetch(`https://omdbapi.com/?apiKey=2a9dd9b6&s=${queryText}&page=${pageParam}`)
            return res.json()
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage, pages) => {
            const maxPage = Math.ceil(Number.parseInt(pages[0].totalResults, 10) / 10)

            if(lastPage.Response === 'True' && pages.length < maxPage) {
                return pages.length + 1
            }
            return undefined
        },
        enabled: false,
        staleTime: 1000 * 60 * 5 // 5분
    })

    useEffect(() => {
        if(queryText) fetchPreviousPage()
    }, [queryText, fetchPreviousPage])

    useEffect(() => {
        if(inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage])


    const handleSubmit = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();

            if (searchText.trim()) {
                setQueryText(searchText);
            } else {
                setSearchText('');
                setQueryText('');
            }
        }, [searchText]
    );

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={searchText}
                    placeholder="영화 제목을 입력하세요"
                    onChange={e => setSearchText(e.target.value)}    
                />
            </form>

            <div>
                {data?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.Search &&
                            page.Search.map(movie => (
                                <div key={movie.imdbID}>{movie.Title}</div>
                            ))
                        }
                    </React.Fragment>
                ))}
            </div>
            {isLoading && <div>로딩 중...</div>}
            <div
                ref={ref}
                style={{height: '20px'}}/>
                
            {isFetched && hasNextPage && (
                <button
                    disabled={isFetching}
                    onClick={() => {
                        fetchNextPage()
                    }}>
                    {isFetching ? '로딩 중...' : '더 보기!'}
                </button>
            )}
        </>
    )
}