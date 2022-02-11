import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs'

import { 
        Container, 
        ContaierIcons,
        ContainerApp

        } from "./styles";



import appleStore from "../../assets/Footer/appleStore.png"
import googlePlay from "../../assets/Footer/googlePlay.png"
import Image from 'next/image';


export function Footer(){
    return(
        <Container>
            <ContaierIcons>
                <span><BsTwitter fontSize={20} color='#fff'/></span>
                <span><BsFacebook fontSize={20} color='#fff'/></span>
                <span><BsInstagram fontSize={20} color='#fff'/></span>
            </ContaierIcons>

                <a href="">Me Ajuda!</a>
                <a href="">Trabalhe conosco</a>
                <a href="">Pagamento na entrega</a>
                <a href="">Cidades atendidas</a>
                <a href="">Quero ser parceiro</a>

                <p>Já baixou o aplicativo?</p>

                <ContainerApp>
                    <a href=''> <Image src={googlePlay} width='175' height='75' /></a>
                    <a href=''> <Image src={appleStore}  width='155' height='50' /> </a>
                </ContainerApp>
                
                <div>
                    <a href=''>Termos de uso</a>
                    <a href=''>Política de privacidade</a>
                </div>

        </Container>
    )
}