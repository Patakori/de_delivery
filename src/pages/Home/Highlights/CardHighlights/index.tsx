
import { 
    Container,


 } from "./styles";


interface PropsCard {
    img: any;
}


export function CardHighlights({img}:PropsCard){
    return(
        <Container>
            {img}
        </Container>
    )
}