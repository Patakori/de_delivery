
import { Avatar } from "./Avatar";
import { Cart } from "./Cart";
import { Login } from "./Login";
import { Search } from "./Search";


import { 
    Container,
    ContainerLeft,
    ContainerRight,

} from "./styles"; 


export function Header(){

    return(
        <Container>  
            <ContainerLeft>
                <Avatar/>
                <Search/>
            </ContainerLeft>
            <ContainerRight>
                <Login/>
                <Cart />
            </ContainerRight>    
        </Container>
    )
}