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

interface PropsProducts {
    id: string,
    price: string,
    name: string,
    image?: any,
}[]

export default function Home() {

  const [popular, setPopular] = useState<PropsProducts[]>([])
  const [beats, setBeats] = useState<PropsProducts[]>([])
  const [returnable, setReturnable] = useState<PropsProducts[]>([])
  const [beer, setBeer] = useState<PropsProducts[]>([])
  const [spirits, setSpirits] = useState<PropsProducts[]>([])
  const [wine, setWine] = useState<PropsProducts[]>([])
  const [noAlcohol, setNoAlcohol] = useState<PropsProducts[]>([])
  const [shop, setShop] = useState<PropsProducts[]>([])
  const [foods, setFoods] = useState<PropsProducts[]>([])

  async function popularData(){
    fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => data.data.filter(function(data:any){
      return data.category === "popular"
    }).map((data:any) => {
      return setPopular(data.products)
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

  async function returnableData(){
    fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => data.data.filter(function(data:any){
      return data.category === "returnable"
    }).map((data:any) => {
      return setReturnable(data.products)
    }));   
  }

  async function beerData(){
    fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => data.data.filter(function(data:any){
      return data.category === "beer"
    }).map((data:any) => {
      return setBeer(data.products)
    }));   
  }

  async function spiritsData(){
    fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => data.data.filter(function(data:any){
      return data.category === "spirits"
    }).map((data:any) => {
      return setSpirits(data.products)
    }));   
  }

  async function wineData(){
    fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => data.data.filter(function(data:any){
      return data.category === "wine"
    }).map((data:any) => {
      return setWine(data.products)
    }));   
  }

  async function noAlcoholData(){
    fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => data.data.filter(function(data:any){
      return data.category === "noAlcohol"
    }).map((data:any) => {
      return setNoAlcohol(data.products)
    }));   
  }

  async function shopData(){
    fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => data.data.filter(function(data:any){
      return data.category === "shop"
    }).map((data:any) => {
      return setShop(data.products)
    }));   
  }

  async function foodslData(){
    fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => data.data.filter(function(data:any){
      return data.category === "foods"
    }).map((data:any) => {
      return setFoods(data.products)
    }));   
  }

  useEffect(()=>{

      popularData();
      beatsData();
      returnableData();
      beerData();
      spiritsData();
      wineData();
      noAlcoholData();
      shopData();
      foodslData();

  },[])

  return (
    <Container>

      <Header/>
      <Slider/>
      <Category/>

      <Categorys category="POPULARES"> 

        {
         popular.slice(0, 5).map(({name, id, image, price}:PropsProducts)=>{
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
          returnable.map(({name, id, image, price}:PropsProducts)=>{
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

        {
          beer.map(({name, id, image, price}:PropsProducts)=>{
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

      <Categorys category="DESTILADOS"> 

        {
          spirits.map(({name, id, image, price}:PropsProducts)=>{
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

      <Categorys category="VINHO"> 

        {
          wine.map(({name, id, image, price}:PropsProducts)=>{
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

      <Categorys category="SEM ÁLCOOL"> 

        {
          noAlcohol.map(({name, id, image, price}:PropsProducts)=>{
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

      <Categorys category="LOJINHA"> 

        {
          shop.map(({name, id, image, price}:PropsProducts)=>{
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

      <Categorys category="COMIDINHA"> 

        {
          foods.map(({name, id, image, price}:PropsProducts)=>{
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

      <ContainerButton>
          Voltar ao topo
      </ContainerButton>

      <Footer/>

    </Container>
  )
}