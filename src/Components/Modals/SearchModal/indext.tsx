import { ReactNode } from "react";
import { 
  ContainerExternal,
  ContainerInternal
} from "./styles";

interface propsNewModal {
  onClose: () => void;
  children: ReactNode;
}

export function SearchModal({onClose, children}: propsNewModal){

  const handleOutsideClick = (e:any) => {
    if(e.target.id) onClose();
  }

  return(
    <>
      <ContainerExternal id='modal' onClick={handleOutsideClick}/>
      <ContainerInternal>
        {children}     
      </ContainerInternal>
    </>
  )
}