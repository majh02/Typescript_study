import { useQuery } from "@tanstack/react-query"

type Movies = Movie[]
interface Movie {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
}

async function queryFn(searchText: string): Promise<Movie[]>{
    const res = await fetch(`https://www.omdbapi.com/?apikey=2a9dd9b6&s=${searchText}`)
    const { Search:movies } = await res.json()
    
    return movies
}

export default function Movies({ searchText = '' } : { searchText: string }) {
    const {data} = useQuery<Movies>({
        queryKey: ['movies', searchText],
        queryFn: () => queryFn(searchText),
        placeholderData: (): Movies => [
            {
              Poster: "https://example.com/dummy1.jpg",
              Title: "Dummy Movie 1",
              Type: "Action",
              Year: "2023",
              imdbID: "tt1234567"
            },
            {
              Poster: "https://example.com/dummy2.jpg",
              Title: "Dummy Movie 2",
              Type: "Comedy",
              Year: "2022",
              imdbID: "tt2345678"
            }
        ],
        staleTime: 1000 * 3,
        meta: {
            myErrorMessage: '영화를 검색할 수 없습니다!!'
        }
    })

    return (
        <>
            <h2>Movies</h2>
            <ul>{data?.map((movie, i) => <li key={i}>{movie.Title}</li>)}</ul>
        </>
    )
}