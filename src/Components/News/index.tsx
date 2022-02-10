import Image from "next/image";
import { Container } from "./styles";

import ImgNews from "../../assets/news/product-illustration_alert.png"


export function News(){
    return(
        <Container>
            <span>
                <Image src={ImgNews} alt="News" width={72}/>
            </span>
            <div>
                <h1>Prevenção ao coronavírus</h1>
                <p>Conheça nossas iniciativas</p>
            </div>
        </Container>
    )
}