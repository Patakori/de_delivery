import { Card } from "../Card";
import { Container, ContainerCard, ButtonArrow } from "./styles";

import { HiArrowRight } from "react-icons/hi"

import Image from "next/image"

import pop01 from "../../assets/populares/01.jpg"

export function Popular(){
    return(
        <Container>
            <h1>POPULARES</h1>
            <ContainerCard>
                <div>

                    <Card 
                        img={<Image 
                            src={pop01} 
                            alt="img"
                            width={100} 
                            height={100}
                        />}
                        product="Beats Senses 269ml"
                        value="5,29"                 
                    />

                    <Card 
                        img={<Image 
                            src={pop01} 
                            alt="img"
                            width={100} 
                            height={100}
                        />}
                        product="Beats Senses 269ml"
                        value="5,29"                 
                    />

                    <Card 
                        img={<Image 
                            src={pop01} 
                            alt="img"
                            width={100} 
                            height={100}
                        />}
                        product="Beats Senses 269ml"
                        value="5,29"                 
                    />

                    <Card 
                        img={<Image 
                            src={pop01} 
                            alt="img"
                            width={100} 
                            height={100}
                        />}
                        product="Beats Senses 269ml"
                        value="5,29"                 
                    />

                    <Card 
                        img={<Image 
                            src={pop01} 
                            alt="img"
                            width={100} 
                            height={100}
                        />}
                        product="Beats Senses 269ml"
                        value="5,29"                 
                    />

                    <Card 
                        img={<Image 
                            src={pop01} 
                            alt="img"
                            width={100} 
                            height={100}
                        />}
                        product="Beats Senses 269ml"
                        value="5,29"                 
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