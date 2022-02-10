import { 
    Container,
    Info,
    BoxImg,

 } from "./styles";


interface PropsCard {
    img: any;
    product: string;
    value: string;
}


export function Card({img, product, value}:PropsCard){
    return(
        <Container>
            <BoxImg>
                {img}
            </BoxImg>
            <Info>
                <span>{product}</span>
                <p>R$ {value}</p>
            </Info>
        </Container>
    )
}