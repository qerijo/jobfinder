import { useEffect, useState } from 'react'
import req from '../utils/request'

const useData = (endpoint, query, deps = []) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true)
        const response = await req(endpoint, query)
        setData(response)
        setIsError(false)
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, deps)

  return {
    data,
    isLoading,
    isError,
  }
}

export default useData
