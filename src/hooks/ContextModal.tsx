import { createContext, ReactNode, useState } from "react"

interface ModalProps{
    children: ReactNode;

 }

 
 

export const ModalContext = createContext({})


export function ContextModal ({children}:ModalProps):JSX.Element{

    const [modal, setModal] = useState(false)
  
    async function handleOpenModal(){  
        setModal(true)
    }
  
    async function handleCloseModal(){  
        setModal(false)
    }

    return(
        <ModalContext.Provider value={{
            handleOpenModal:handleOpenModal,
            handleCloseModal:handleCloseModal,
            modal,
        }}>

            {children}

        </ModalContext.Provider>
    )

}