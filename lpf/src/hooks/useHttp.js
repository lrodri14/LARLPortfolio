import { useState, useCallback } from 'react'
const url = 'http://127.0.0.1:8000/main/'

function useHttp(){
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [response, setResponse] = useState(false)
    const sendRequest = useCallback(async (requestConfig) => {
        try{
            setIsLoading(true)
                        setError(false)
            setResponse(false)
            const response = await fetch(url + requestConfig.endPoint,
                                        {method: requestConfig.method ? requestConfig.method : 'GET',
                                        headers: requestConfig.headers ? requestConfig.headers : {},
                                        body: requestConfig.content ? JSON.stringify(requestConfig.content) : null })

            const data = await response.json()

            if (!response.ok){
                const error = new Error()
                error.error = data.error
                throw error
            }

            setResponse(data)
        }catch(error){
            setError(error)
        }
        setIsLoading(false)
    }, [])

    return {
        isLoading,
        error,
        response,
        sendRequest
    }
}

export default useHttp