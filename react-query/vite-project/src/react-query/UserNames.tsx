import { useQuery } from "@tanstack/react-query"

type Users = User[]
interface User {
    id: string
    name: string
    age:number
}

async function queryFn(): Promise<Users>{
    const res = await fetch('https://api.heropy.dev/v0/users')
    const {users} = await res.json()
    return users
}

export default function UserNames() {
    const {data} = useQuery<Users, Error, string[]>({
        queryKey: ['users'],
        queryFn,
        staleTime: 1000*10,
        select: data => data.map(user => user.name)
    })

    return (
        <>
            <h2>User Names</h2>
            <ul>{data?.map((name, i) => <li key={i}>{name}</li>)}</ul>
        </>
    )
}