import { useState } from "react";
import {HiChevronDown, HiUserCircle, HiOutlineMenu} from "react-icons/hi"
import { AvatarModal } from "../../../Components/Modals/AvatarModal/index";


import { 
    Container,
    IconsJoin,
    Location,
    Button,

 } from "./styles";

export function Avatar(){

    
  const [modal, setModal] = useState(false)

  function handleOpenModal(){
    setModal(true)
  }
  
  function handleCloseModal(){
    setModal(false)
  }

    return (
        <Container>
            <IconsJoin>
                    <HiUserCircle color="#eba417" fontSize={38}  z-index={30}/>
                <div>
                    <HiOutlineMenu fontSize={10} />
                </div>
                
            </IconsJoin>
            <Location onClick={handleOpenModal}>
                <h1>Por favor</h1>
                <h2>Informar sua localização</h2>
            </Location>
            <Button type="button" onClick={handleOpenModal}>
                <HiChevronDown  color="#ffffff" fontSize={20}/>
            </Button>
            {
                modal? 
                <AvatarModal onClose={handleCloseModal}>
                    <span>Alterar meu endereço</span>
                    <p>Não saia para retirar seu pedido</p>        
                </AvatarModal> : null
            }
            
        </Container>
    )
}