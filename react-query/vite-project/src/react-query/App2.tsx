import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import DelayedData from './DelayedData'
import UserNames from './UserNames'
import Movies from './Movies'
import MovieList from './MovieList'
import AddUser from './AddUsers'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
  

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (_error, query) => {
      alert(query.meta?.myErrorMessage)
    }
  })
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <UserNames/> */}
      <DelayedData />
      <DelayedData wait={2000}/>
      <DelayedData wait={3000}/>
      {/* <Movies searchText='spider'/> */}
      {/* <Movies /> */}
      <MovieList/>
      <AddUser/>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}