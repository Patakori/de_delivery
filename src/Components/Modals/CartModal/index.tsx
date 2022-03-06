import { ReactNode, useState } from "react";
import { 
  ContainerExternal,
  ContainerInternal,
  ContainerBag

} from "./styles";

export interface propsNewModal {
  onClose: () => void;
  children: ReactNode;
  type?: boolean;
}

export function CartModal({onClose, children}: propsNewModal){

  const [animation, setAnimation] = useState(false)

  const handleOutsideClick = (e:any) => {
    setAnimation(true)
    if(e.target.id) {
      setTimeout( onClose, 800)
      
    }
  }

  return(
    <>
      <ContainerExternal type={animation} id='modal' onClick={handleOutsideClick}/>
      <ContainerInternal type={animation}>
      <ContainerBag>   
            <h1>SACOLA</h1>
                            
            <button type='button' id='modal' onClick={handleOutsideClick}>X</button>
      </ContainerBag>
        {children}     
      </ContainerInternal>
    </>
  )
}