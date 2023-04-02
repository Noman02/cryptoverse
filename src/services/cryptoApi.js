import {createApi,fetchBaseQuery}from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders= {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '6737badcefmshbc9e2dfceaa306ap1edeebjsndaccf273f75d'
}

const baseUrl= 'https://coinranking1.p.rapidapi.com'
const createRequest = (url)=>({url, headers: cryptoApiHeaders})

export const cryptoApi= createApi({
    reducerPath:"cryptoApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query:()=>createRequest("/coins")
        })
    })
})

export const {useGetCryptosQuery,}=cryptoApi