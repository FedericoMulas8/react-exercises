import useSWR from 'swr'

export function useGithubUsers(username) {
    const {data, error} = useSWR(username ? `https://api.github.com/users/${username}` : null)

    return {
        user: data,
        error,
    }
}