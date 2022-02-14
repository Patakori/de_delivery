import { Container } from "./styles";

import { HiOutlineShoppingBag } from "react-icons/hi"

export function Cart(){
    return(
        <Container>
                <HiOutlineShoppingBag size={55} color="white"/>
                <div>0</div>
        </Container>
    )
}