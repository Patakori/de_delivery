import {HiChevronDown, HiUserCircle, HiOutlineMenu} from "react-icons/hi"

import { 
    Container,
    IconsJoin,
    Location,
    Button,

 } from "./styles";

 interface HeaderProps{
    onOpenNewModal: () => void;
}

export function Avatar({onOpenNewModal}:HeaderProps){
    return (
        <Container>
            <IconsJoin>
                    <HiUserCircle color="#eba417" fontSize={38}  z-index={30}/>
                <div>
                    <HiOutlineMenu fontSize={10} />
                </div>
                
            </IconsJoin>
            <Location>
                <h1>Por favor</h1>
                <h2>Informar sua localização</h2>
            </Location>
            <Button type="button" onClick={onOpenNewModal}>
                <HiChevronDown  color="#ffffff" fontSize={20}/>
            </Button>
        </Container>
    )
}