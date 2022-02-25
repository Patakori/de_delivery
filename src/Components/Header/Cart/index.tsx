import { Container, ContainerImage, ContainerText } from "./styles";

import { HiOutlineShoppingBag } from "react-icons/hi"
import { useState } from "react";
import { CartModal } from "../../Modals/CartModal";

import Image from "next/image";

export interface Props {
    onClose: () => void;
    type: boolean;
  }

export function Cart(){

    const [modal, setModal] = useState(false)

    function handleOpenModal(){
      setModal(true)
    }
    
    function handleCloseModal(){
      setModal(false)
    }


    return(
        <>
            <Container onClick={handleOpenModal}>
                    <HiOutlineShoppingBag size={55} color="white"/>
                    <div>0</div>
            </Container>
            {
                modal? (
                    <CartModal onClose={handleCloseModal}>
                        <ContainerImage>
                            <Image 
                                src="https://courier-images-web.imgix.net/static/img/empty-cart.png?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2&fm=png" 
                                alt="SACOLA"   
                                height='250'  
                                width='250'           
                                layout="fixed"                           
                            />
                            <ContainerText>Putz, está vazia! <br/> Você não possui nenhum produto na sua sacola</ContainerText>
                        </ContainerImage>
                        
                    </CartModal>
                )
                : null
            }
        </>
    )
}