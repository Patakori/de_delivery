import { ReactNode, useState } from "react";
import { 
  ContainerExternal,
  ContainerInternal
} from "./styles";

interface propsNewModal {
  onClose: () => void;
  inClose: () => void;
  children: ReactNode;
  type?: boolean
}

export function SearchModal({onClose, inClose, children, type}: propsNewModal){

  const [animation, setAnimation] = useState(false)

  const handleOutsideClick = (e:any) => {
    if(e.target.id) onClose();
  }

  return(
    <>
      <ContainerExternal type={animation} id='modal' onClick={handleOutsideClick}/>
      <ContainerInternal type={animation}>
        {children}     
      </ContainerInternal>
    </>
  )
}