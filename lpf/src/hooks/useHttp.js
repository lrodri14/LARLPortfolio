// import { useState, useCallback } from 'react'
// const url = 'http://127.0.0.1:8000/main/'
//
// function useHttp(){
//     const [isLoading, setIsLoading] = useState(false)
//     const [error, setError] = useState(false)
//     const [response, setResponse] = useState(false)
//     const sendRequest = useCallback(async (requestConfig) => {
//         try{
//             setIsLoading(true)
//             setError(false)
//             setResponse(false)
//             const response = await fetch(url + requestConfig.endPoint,
//                                         {method: requestConfig.method ? requestConfig.method : 'GET',
//                                         headers: requestConfig.headers ? requestConfig.headers : {},
//                                         body: requestConfig.content ? JSON.stringify(requestConfig.content) : null })
//
//             const data = await response.json()
//
//             if (!response.ok){
//                 const error = new Error()
//                 error.error = data.error
//                 throw error
//             }
//
//             setResponse(data)
//         }catch(error){
//             setError(error)
//         }
//         setIsLoading(false)
//     }, [])
//
//     return {
//         isLoading,
//         error,
//         response,
//         sendRequest
//     }
// }
//
// export default useHttp

import React, { useState, useCallback } from 'react'

const baseUrl = 'http://127.0.0.1:8000/main/'

function useHttp(){
    const [ isLoading, setIsLoading ] = useState(false)
    const [ data, setData ] = useState(false)
    const [ success, setSuccess ] = useState(false)
    const [ error, setError ] = useState(false)

    const sendRequest = useCallback(async (requestConfig) => {
        setIsLoading(true)
        setSuccess(false)
        setError(false)
        setData(false)

        const { url, method, body, token } = requestConfig

        try{
            const response = await fetch(baseUrl + url, { method: method ? method : 'GET',
                                    body: body ? JSON.stringify(body) : null,
                                    headers: {'Content-Type': 'application/json',
                                              'Authorization': `Bearer ${token}`}})

            const data = await response.json()

            if ((data[0]?.Error === true || data?.Error === true) || (data[0]?.Error === "true" || data?.Error === "true")){
                throw {'message': data[0]?.Mensaje || data?.Mensaje}
            }

            setIsLoading(false)
            setSuccess(true)
            setData(data)
        }catch (error){
            setError(error.message)
        }finally{
            setIsLoading(false)
        }

    }, [])

    return { isLoading, data, success, error, sendRequest }
}

export default useHttp