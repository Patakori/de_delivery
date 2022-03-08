import { createContext, ReactNode, useEffect, useState } from "react";

import { apiAxios } from "../services/axios"


interface ContextProviderProps {
    children: ReactNode
}


export const ContextCart = createContext({})

export function UseCartProvider({children}:ContextProviderProps){


    return(
      <ContextCart.Provider value={{

      }}>
        {children}
      </ContextCart.Provider>
    )

}