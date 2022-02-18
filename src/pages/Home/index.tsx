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
import { Footer } from "../../Components/Footer";

import ImgNews from "../../assets/news/product-illustration_alert.png"



interface PropsData {
  category: string,
  products: [],
}

interface PropsProducts {
    id: string,
    price: string,
    name: string,
    image?: any,
}[]

export default function Home() {

  const [populares, setPopulares] = useState<PropsProducts[]>([])
  const [beats, setBeats] = useState<PropsProducts[]>([])
  const [retornaveis, setRetornaveis] = useState<PropsProducts[]>([])
  const [loader, setLoader] = useState(false)

  async function popularesData(){
    fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => data.data.filter(function(data:any){
      return data.category === "populares"
    }).map((data:any) => {
      return setPopulares(data.products)
    }));       
  }
  
  async function beatsData(){
    fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => data.data.filter(function(data:any){
      return data.category === "beats"
    }).map((data:any) => {
      return setBeats(data.products)
    }));  
  }

  async function retornaveisData(){
    fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => data.data.filter(function(data:any){
      return data.category === "retornaveis"
    }).map((data:any) => {
      return setRetornaveis(data.products)
    }));   
  }

  useEffect(()=>{

      popularesData();
      beatsData();
      retornaveisData();

  },[])

  return (
    <Container>

      <Header/>
      <Slider/>
      <Category/>

      <Categorys category="POPULARES"> 

        {
         loader ? <p>carregando</p> : populares.slice(0, 5).map(({name, id, image, price}:PropsProducts)=>{
          return(
            <Card  
                key={id} 
                img={<Image src={image} alt="img" width={100}  height={100}/>}
                product={name}
                value={price}
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

        {
            beats.map(({name, id, image, price}:PropsProducts)=>{
              return(
                <Card  
                    key={id} 
                    img={<Image src={image} alt="img" width={100}  height={100}/>}
                    product={name}
                    value={price}
                />
              )
            })
          }


      </Categorys>
      
      <Categorys category="RETORNÁVEIS"> 

        {
          retornaveis.map(({name, id, image, price}:PropsProducts)=>{
            return(
              <Card  
                  key={id} 
                  img={<Image src={image} alt="img" width={100}  height={100}/>}
                  product={name}
                  value={price}
              />
            )
          })
        }

      </Categorys>

      <Highlights category="DESTAQUES">

        <CardHighlights
            img={<Image src='https://courier-images-prod.imgix.net/mini_banner/beats-150-bpm-by-anitta-2.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2' 
            alt="img"  
            width={700}  
            height={120}
            layout="fixed"            
            objectFit="fill"
            objectPosition='container'
            />}
          />

        <CardHighlights
            img={<Image src='https://courier-images-prod.imgix.net/mini_banner/vinhos-suaves.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2' 
            alt="img"  
            width={700}  
            height={120}
            layout="fixed"            
            objectFit="fill"
            objectPosition='container'
            />}
          />

        <CardHighlights
            img={<Image src='https://courier-images-prod.imgix.net/mini_banner/verao-com-cheetos.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2' 
            alt="img"  
            width={700}  
            height={120}
            layout="fixed"            
            objectFit="fill"
            objectPosition='container'
            />}
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