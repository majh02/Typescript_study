export type Users = User[];
export interface User {
    name: string
    age: number
    isValid?: boolean
    emails?: string[]
    photo?: {
        name: string
        data: string
    }
    id?: string
}

export default function Users() {
    const {data} = useQuery<Users>({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://api.heropy.dev/v0/users');
            const json = await res.json();
            return json.users;
        },
        staleTime: 1000 * 60 * 5,
    })
}