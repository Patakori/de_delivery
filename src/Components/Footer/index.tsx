import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs'

import { 
        Container, 
        ContaierIcons,
        ContainerApp,
        ContainerAboutDelivery,
        Containerpartnership,
        ContainerPolitics,
        ContainerInfos,
        ContainerButton

        } from "./styles";



import appleStore from "../../assets/Footer/appleStore.png"
import googlePlay from "../../assets/Footer/googlePlay.png"
import Image from 'next/image';


export function Footer(){

    const scrollTop = function() {
        window.scrollTo(0, 0);
    };

    return(
        <Container>
            
            <ContainerButton onClick={scrollTop}>
                Voltar ao topo
            </ContainerButton>
            <ContainerInfos>
                <ContaierIcons>
                    <span><BsTwitter fontSize={20} color='#fff'/></span>
                    <span><BsFacebook fontSize={20} color='#fff'/></span>
                    <span><BsInstagram fontSize={20} color='#fff'/></span>
                </ContaierIcons>

                <ContainerAboutDelivery>
                    <span>Sobre o Delivery</span>
                    <a href="">Me Ajuda!</a>
                    <a href="">Trabalhe conosco</a>
                    <a href="">Pagamento na entrega</a>
                    <a href="">Cidades atendidas</a>
                </ContainerAboutDelivery>
                <Containerpartnership>
                    <span>Parcerias</span>
                    <a href="">Quero ser parceiro</a>
                </Containerpartnership>
        
                <ContainerApp>
                    <p>Já baixou o aplicativo?</p>
                    <a href=''> <Image src={googlePlay} width='175' height='75' /></a>
                    <a href=''> <Image src={appleStore}  width='155' height='50' /> </a>
                </ContainerApp>
            </ContainerInfos>
            
            <ContainerPolitics>
                <a href=''>Termos de uso</a>
                <a href=''>Política de privacidade</a>
            </ContainerPolitics>



        </Container>
    )
}