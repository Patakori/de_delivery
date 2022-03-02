
import { UseSearchProvider } from "../../hooks/UseSearch";
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
    <UseSearchProvider>
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
    </UseSearchProvider>
    )
}