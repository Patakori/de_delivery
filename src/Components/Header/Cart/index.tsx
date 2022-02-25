import { Container, ContainerImage, ContainerBag, ContainerText } from "./styles";

import { HiOutlineShoppingBag } from "react-icons/hi"
import { useState } from "react";
import { CartModal } from "../../Modals/CartModal";

import Image from "next/image";

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
                        <ContainerBag>   
                            <h1>SACOLA</h1>
                            <button type="button" onClick={handleCloseModal}>X</button>
                        </ContainerBag>
                        <ContainerImage>
                            <Image 
                                src="https://courier-images-web.imgix.net/static/img/empty-cart.png?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2&fm=png" 
                                alt="SACOLA"   
                                height='500'  
                                width='500'           
                                layout="fixed"
                                objectFit="cover"               
                            />
                            <ContainerText>Putz, está vazia! <br/> Você não possui nenhum produto na sua <br/> sacola</ContainerText>
                        </ContainerImage>
                        
                    </CartModal>
                )
                : null
            }
        </>
    )
}