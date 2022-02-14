import Image from "next/image";

import {
          Container, 
          ContainerNews,
          ContainerButton
          
        } from "./styles";

import { Category } from "../../Components/Category";
import { Header } from "../../Components/Header";
import { Slider } from "./Slider";
import { Categorys } from "../../Components/Categorys";
import { Card } from "../../Components/Categorys/Card";
import { Highlights } from "./Highlights";
import { CardHighlights } from "./Highlights/CardHighlights";

import b01 from "../../assets/beats/beats.jpg"
import pop01 from "../../assets/populares/01.jpg"
import ImgNews from "../../assets/news/product-illustration_alert.png"
import high01 from "../../assets/highlights/01.jpg"
import { Footer } from "../../Components/Footer";


export default function Home() {
  return (
    <Container>

      <Header/>
      <Slider/>
      <Category/>

      <Categorys category="POPULARES"> 

        <Card  img={<Image src={pop01} alt="img" width={100}  height={100}/>}
        product="Beats Senses 269ml"
        value="5,29"
        />

        <Card  img={<Image src={pop01} alt="img" width={100}  height={100}/>}
        product="Beats Senses 269ml"
        value="5,29"
        />

        <Card  img={<Image src={pop01} alt="img" width={100}  height={100}/>}
        product="Beats Senses 269ml"
        value="5,29"
        />

        <Card  img={<Image src={pop01} alt="img" width={100}  height={100}/>}
        product="Beats Senses 269ml"
        value="5,29"
        />

        <Card  img={<Image src={pop01} alt="img" width={100}  height={100}/>}
        product="Beats Senses 269ml"
        value="5,29"
        />


      </Categorys>

      <ContainerNews>
        <span>
            <Image src={ImgNews} alt="News" width={72}/>
        </span>
        <div>
            <h1>Prevenção ao coronavírus</h1>
            <p>Conheça nossas iniciativas</p>
        </div>
      </ContainerNews>

      <Categorys category="PLANO B DE BEATS"> 

        <Card  
           img={<Image src={b01} alt="img" width={100} height={100}/>}
           product="Skol 269ml"
           value="2,39"
        />

        <Card  
           img={<Image src={b01} alt="img" width={100} height={100}/>}
           product="Skol 269ml"
           value="2,39"
        />

        <Card  
           img={<Image src={b01} alt="img" width={100} height={100}/>}
           product="Skol 269ml"
           value="2,39"
        />

        <Card  
           img={<Image src={b01} alt="img" width={100} height={100}/>}
           product="Skol 269ml"
           value="2,39"
        />

        <Card  
           img={<Image src={b01} alt="img" width={100} height={100}/>}
           product="Skol 269ml"
           value="2,39"
        />


      </Categorys>
      
      <Categorys category="RETORNÁVEIS"> 
        <Card  
           img={<Image src={b01} alt="img" width={100} height={100}/>}
           product="Skol 269ml"
           value="2,39"
        />
      </Categorys>

      <Highlights category="DESTAQUES">

        <CardHighlights
            img={<Image src={high01} alt="img"  layout="fixed" objectFit="contain" />}
          />

        <CardHighlights
            img={<Image src={high01} alt="img"  layout="fixed" objectFit="contain" />}
          />

        <CardHighlights
            img={<Image src={high01} alt="img"  layout="fixed" objectFit="contain" />}
          />

      </Highlights>

      <Categorys category="CERVEJAS"> 
        <Card  
           img={<Image src={b01} alt="img" width={100} height={100}/>}
           product="Skol 269ml"
           value="2,39"
        />
      </Categorys>

      <Categorys category="DESTILADOS"> 
        <Card  
           img={<Image src={b01} alt="img" width={100} height={100}/>}
           product="Skol 269ml"
           value="2,39"
        />
      </Categorys>

      <Categorys category="VINHO"> 
        <Card  
           img={<Image src={b01} alt="img" width={100} height={100}/>}
           product="Skol 269ml"
           value="2,39"
        />
      </Categorys>

      <Categorys category="SEM ÁLCOOL"> 
        <Card  
           img={<Image src={b01} alt="img" width={100} height={100}/>}
           product="Skol 269ml"
           value="2,39"
        />
      </Categorys>

      <Categorys category="LOJINHA"> 
        <Card  
           img={<Image src={b01} alt="img" width={100} height={100}/>}
           product="Skol 269ml"
           value="2,39"
        />
      </Categorys>

      <Categorys category="COMIDINHA"> 
        <Card  
           img={<Image src={b01} alt="img" width={100} height={100}/>}
           product="Skol 269ml"
           value="2,39"
        />
      </Categorys>

      <ContainerButton>
          Voltar ao topo
      </ContainerButton>

      <Footer/>

    </Container>
  )
}