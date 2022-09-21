import useSWR from 'swr'

export function useGithubUsers(username) {
    const {data, error, mutate} = useSWR(username ? `https://api.github.com/users/${username}` : null)

    function handleRefresh() {
        mutate()
    }

    return {
        user: data,
        error,
        onRefresh: handleRefresh,
    }
}