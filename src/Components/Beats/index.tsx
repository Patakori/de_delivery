import { Card } from "../Card";
import { Container, ContainerCard, ButtonArrow } from "./styles";

import { HiArrowRight } from "react-icons/hi"

import Image from "next/image"

import b01 from "../../assets/beats/01.jpg"

export function Beats(){
    return(
        <Container>
            <h1>PLANO B DE BEATS</h1>
            <ContainerCard>
                <div>

                    <Card 
                        img={<Image 
                            src={b01} 
                            alt="img"
                            width={100} 
                            height={100}
                        />}
                        product='Skol 269ml'
                        value="2,39"                 
                    />

                    <Card 
                        img={<Image 
                            src={b01} 
                            alt="img"
                            width={100} 
                            height={100}
                        />}
                        product='Skol 269ml'
                        value="2,39"                 
                    />

                    <Card 
                        img={<Image 
                            src={b01} 
                            alt="img"
                            width={100} 
                            height={100}
                        />}
                        product='Skol 269ml'
                        value="2,39"                 
                    />

                    <Card 
                        img={<Image 
                            src={b01} 
                            alt="img"
                            width={100} 
                            height={100}
                        />}
                        product='Skol 269ml'
                        value="2,39"                 
                    />

                    <Card 
                        img={<Image 
                            src={b01} 
                            alt="img"
                            width={100} 
                            height={100}
                        />}
                        product='Skol 269ml'
                        value="2,39"                 
                    />

                    <Card 
                        img={<Image 
                            src={b01} 
                            alt="img"
                            width={100} 
                            height={100}
                        />}
                        product='Skol 269ml'
                        value="2,39"                 
                    />

                    
                    
                    <ButtonArrow>
                        <button><HiArrowRight color="#eba417" fontSize={30}/></button>
                        <p>Ver Todos</p>
                    </ButtonArrow>
                </div>
            </ContainerCard>
        </Container>
    )
}