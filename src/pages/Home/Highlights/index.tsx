import { Container, ContainerCard} from "./styles";

import { ReactNode } from "react";

interface PropsCard {
    children: ReactNode;
    category: string;

}

export function Highlights({children, category}:PropsCard){
    return(
        <Container>
            <h1>{category}</h1>
            <ContainerCard>
                <div>
                    {children}                        
                </div>
            </ContainerCard>
        </Container>
    )
}