import { useContext, useState, createContext } from "react";
import { NewModal } from "../Modal";
import { Avatar } from "./Avatar";
import { Cart } from "./Cart";
import { Login } from "./Login";
import { Search } from "./Search";

import { 
    Container,
    ContainerLeft,
    ContainerRight,

} from "./styles";

import { ModalContext } from "../../hooks/ContextModal"; 


export function Header(){

    const {handleOpenModal}:any = useContext(ModalContext)

    return(
        <Container>
            <ContainerLeft>
                <Avatar onOpenNewModal={handleOpenModal}/>
                <NewModal> 
                    <p> oiii </p>

                </NewModal>
                <Search/>
            </ContainerLeft>
            <ContainerRight>
                <Login/>
                <Cart />
            </ContainerRight>
        </Container>
    )
}