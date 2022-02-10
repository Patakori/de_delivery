import { Container } from "./styles";

interface buttonProps {
    name: string;
    icon?: any;
}

export function Button({name, icon}:buttonProps){
    return(
        <Container>
            <button>{icon}{name}</button>
        </Container>
    )
}