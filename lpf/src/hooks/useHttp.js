import { useState, useCallback } from 'react'
const url = 'http://127.0.0.1:8000/main/'

function useHttp(){
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const sendRequest = useCallback(async (requestConfig, cleanUpProcess) => {
        try{
            setIsLoading(true)
            setSuccess(false)
            setError(false)
            const response = await fetch(url + requestConfig.endPoint,
                                        {method: requestConfig.method ? requestConfig.method : 'GET',
                                        headers: requestConfig.headers ? requestConfig.headers : {},
                                        body: requestConfig.content ? JSON.stringify(requestConfig.content) : null })

            const data = await response.json()
            cleanUpProcess(data)
        }catch(error){
            setError(error.message)
        }
        setIsLoading(false)
        setSuccess(true)
    }, [])

    return {
        isLoading,
        success,
        error,
        sendRequest
    }
}

export default useHttp