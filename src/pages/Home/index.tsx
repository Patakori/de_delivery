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

interface PropsProducts {
  id: number,
  category: string,
  price: string,
  name: string,
  image?: any,
}

export default function Home() {


  const [products, setProducts] = useState<PropsProducts[]>([])

  useEffect(()=>{
    fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data.products))

  },[])

  return (
    <Container>

      <Header/>
      <Slider/>
      <Category/>

      <Categorys category="POPULARES"> 

        {
          products.slice(0, 5).map((products, id)=>{
            return(
              <Card  
                  key={id} 
                  img={<Image src={products.image} alt="img" width={100}  height={100}/>}
                  product={products.name}
                  value={products.price}
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
          products.slice(0, 5).map((products, id)=>{
            return(
              <Card  
                  key={id} 
                  img={<Image src={products.image} alt="img" width={100}  height={100}/>}
                  product={products.name}
                  value={products.price}
              />
            )
          })
        }

      </Categorys>
      
      <Categorys category="RETORNÁVEIS"> 
        {
          products.slice(0, 5).map((products, id)=>{
            return(
              <Card  
                  key={id} 
                  img={<Image src={products.image} alt="img" width={100}  height={100}/>}
                  product={products.name}
                  value={products.price}
              />
            )
          })
        }
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
        {
          products.slice(0, 5).map((products, id)=>{
            return(
              <Card  
                  key={id} 
                  img={<Image src={products.image} alt="img" width={100}  height={100}/>}
                  product={products.name}
                  value={products.price}
              />
            )
          })
        }
      </Categorys>

      <Categorys category="DESTILADOS"> 
        {
          products.slice(0, 5).map((products, id)=>{
            return(
              <Card  
                  key={id} 
                  img={<Image src={products.image} alt="img" width={100}  height={100}/>}
                  product={products.name}
                  value={products.price}
              />
            )
          })
        }
      </Categorys>

      <Categorys category="VINHO"> 
        {
          products.slice(0, 5).map((products, id)=>{
            return(
              <Card  
                  key={id} 
                  img={<Image src={products.image} alt="img" width={100}  height={100}/>}
                  product={products.name}
                  value={products.price}
              />
            )
          })
        }
      </Categorys>

      <Categorys category="SEM ÁLCOOL"> 
        {
          products.slice(0, 5).map((products, id)=>{
            return(
              <Card  
                  key={id} 
                  img={<Image src={products.image} alt="img" width={100}  height={100}/>}
                  product={products.name}
                  value={products.price}
              />
            )
          })
        }
      </Categorys>

      <Categorys category="LOJINHA"> 
        {
          products.slice(0, 5).map((products, id)=>{
            return(
              <Card  
                  key={id} 
                  img={<Image src={products.image} alt="img" width={100}  height={100}/>}
                  product={products.name}
                  value={products.price}
              />
            )
          })
        }
      </Categorys>

      <Categorys category="COMIDINHA"> 
        {
          products.slice(0, 5).map((products, id)=>{
            return(
              <Card  
                  key={id} 
                  img={<Image src={products.image} alt="img" width={100}  height={100}/>}
                  product={products.name}
                  value={products.price}
              />
            )
          })
        }
      </Categorys>

      <ContainerButton>
          Voltar ao topo
      </ContainerButton>

      <Footer/>

    </Container>
  )
}