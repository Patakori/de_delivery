import { createContext, ReactNode, useEffect, useState } from "react";

import { apiAxios } from "../services/axios"


interface ContextProviderProps {
    children: ReactNode
}

export interface PropsProducts {
    id: string,
    price: string,
    name: string,
    image?: any,
}[]

export interface PropsData {

  category:string,
  products: PropsProducts[],

}

export interface PropsGetSearch {
    getSearch:string;
}


export const ContextSearch = createContext({})

export function UseSearchProvider({children}:ContextProviderProps){

    const [getSearch, setGetSearch] = useState('')
    const [respSearch, setRespSearch] = useState<PropsProducts[]>([])
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState<Error | null>(null)


    async function searchData(){
        setIsFetching(true)
        apiAxios.get('/api/products')
        .then((response) => setRespSearch(response.data.data.map((data:PropsData)=>{
            return data.products
            })
            .flat()
            .filter((product:PropsProducts)=>{
                return (product.name?.toUpperCase().includes(getSearch.toUpperCase()))
            })))
            .catch((err) => { setError(err) })
            .finally(() =>{ setIsFetching(false) })
      }  

    useEffect(()=>{
        if(getSearch !== ''){
          searchData()
        }
        if(getSearch === ''){
          setRespSearch([])
        }
    },[getSearch])

    return(
      <ContextSearch.Provider value={{
        getSearch,
        setGetSearch,
        respSearch,
        setRespSearch,
        isFetching,
      }}>
        {children}
      </ContextSearch.Provider>
    )

}