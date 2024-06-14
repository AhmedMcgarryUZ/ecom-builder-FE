type typedPath<T> = Parameters<typeof useFetch<T>>[0]
type typedOptions<T> = Parameters<typeof useFetch<T>>[1]

const useService = async <T>(path: typedPath<T>, opts?: typedOptions<T>) => {
  const config = useRuntimeConfig()
  const data = await useFetch<T>(`${config.public.CMS_BASE_URL}${path}`, {
    headers: {
      ...opts?.headers
    }
  })

  return data
}

export default useService
