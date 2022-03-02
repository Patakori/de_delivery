import { Container, ContainerButton } from "./styles";

interface buttonProps {
    name: string;
    icon?: any;
}

export function ButtonCategorys({name, icon}:buttonProps){
    return(
        <Container>
            <ContainerButton>{icon}{name}</ContainerButton>
        </Container>
    )
}