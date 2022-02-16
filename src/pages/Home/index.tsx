import Image from "next/image";

import { useEffect, useState } from "react";

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

interface PropsData {
  category: string,
  products: {
    id: number,
    price: string,
    name: string,
    image?: any,
  }
}

interface PropsProducts {
  id: number,
  price: string,
  name: string,
  image?: any,
}[]

export default function Home() {


  const [data, setData] = useState <PropsData[]>([])
  const [populares, setPopulares] = useState({})
  const [beats, setBeats] = useState<PropsProducts[]>([])

  useEffect(()=>{
    fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => setData(data.data))

  },[])

  function popularesData(){
    return data.filter(function(data){
      return data.category === "populares"
    })
  }


  return (
    <Container>

      <Header/>
      <Slider/>
      <Category/>

      <Categorys category="POPULARES"> 

        {
          data.map((data, id)=>{
            return(
              <Card  
                  key={id} 
                  img={'<Image src={data.products.image} alt="img" width={100}  height={100}/>'}
                  product={''}
                  value={''}
              />
            )
          })
        }

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


      </Categorys>
      
      <Categorys category="RETORNÁVEIS"> 

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

      </Categorys>

      <Categorys category="DESTILADOS"> 

      </Categorys>

      <Categorys category="VINHO"> 

      </Categorys>

      <Categorys category="SEM ÁLCOOL"> 

      </Categorys>

      <Categorys category="LOJINHA"> 

      </Categorys>

      <Categorys category="COMIDINHA"> 

      </Categorys>

      <ContainerButton>
          Voltar ao topo
      </ContainerButton>

      <Footer/>

    </Container>
  )
}