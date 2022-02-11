import { Card } from "./Card";

import { Container, ContainerCard, ButtonArrow,CardBox, Info, BoxImg } from "./styles";

import { HiArrowRight } from "react-icons/hi"

import { ReactNode } from "react";

interface PropsCard {
    children: ReactNode;
    category: string;

}

export function Categorys({children, category}:PropsCard){
    return(
        <Container>
            <h1>{category}</h1>
            <ContainerCard>
                <div>
                    {children}                        
                    <ButtonArrow>
                        <button><HiArrowRight color="#eba417" fontSize={30}/></button>
                        <p>Ver Todos</p>
                    </ButtonArrow>
                </div>
            </ContainerCard>
        </Container>
    )
}