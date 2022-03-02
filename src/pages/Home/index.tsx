import Image from "next/image";

import {
          Container, 
          ContainerNews,
          ContainerButton,
          Spin,
          ContainerFetching,
          
        } from "./styles";

import { ButtonCategorys } from "../../Components/Category/ButtonCategorys";
import { Header } from "../../Components/Header";
import { Slider } from "./Slider";
import { Categorys } from "../../Components/Categorys";
import { Card } from "../../Components/Categorys/Card";
import { Highlights } from "./Highlights";
import { CardHighlights } from "./Highlights/CardHighlights";
import { Footer } from "../../Components/Footer";
import { useCategory } from "../../hooks/useCategory";

import { PropsProducts, PropsHighlights } from "../../hooks/useCategory"

import ImgNews from "../../assets/news/product-illustration_alert.png"

import { ImSpinner11 } from "react-icons/im"
import { Category } from "../../Components/Category";


export default function Home() {

  const { popular, beats, returnable, beer, spirits, wine, noAlcohol, shop, foods, highlights,isFetching } = useCategory<PropsProducts[]>('/api/products')
  

  return (
    <Container>

      <Header />

      <Slider/>

      <Category/>

      <Categorys category="POPULARES"> 

        {isFetching && 
            <ContainerFetching>
              <Spin><ImSpinner11 size={20} color="#eba417"/></Spin>
            </ContainerFetching>
        }
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

        {isFetching && 
            <ContainerFetching>
              <Spin><ImSpinner11 size={20} color="#eba417"/></Spin>
            </ContainerFetching>
        }
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

        {isFetching && 
            <ContainerFetching>
              <Spin><ImSpinner11 size={20} color="#eba417"/></Spin>
            </ContainerFetching>
        }
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

        {isFetching && 
            <ContainerFetching>
              <Spin><ImSpinner11 size={20} color="#eba417"/></Spin>
            </ContainerFetching>
        }
        {
          highlights.map(({id, image}:PropsHighlights)=>{
            return(
              <CardHighlights
                key={id}
                img={<Image src={image}
                  alt="img"  
                  width={700}  
                  height={120}
                  layout="fixed"            
                  objectFit="fill"
                  objectPosition='container'
                />}
              />
            )
          })
        }
        
      </Highlights>

      <Categorys category="CERVEJAS"> 

        {isFetching && 
            <ContainerFetching>
              <Spin><ImSpinner11 size={20} color="#eba417"/></Spin>
            </ContainerFetching>
        }
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

        {isFetching && 
            <ContainerFetching>
              <Spin><ImSpinner11 size={20} color="#eba417"/></Spin>
            </ContainerFetching>
        }
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

        {isFetching && 
            <ContainerFetching>
              <Spin><ImSpinner11 size={20} color="#eba417"/></Spin>
            </ContainerFetching>
        }
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

        {isFetching && 
            <ContainerFetching>
              <Spin><ImSpinner11 size={20} color="#eba417"/></Spin>
            </ContainerFetching>
        }
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

        {isFetching && 
            <ContainerFetching>
              <Spin><ImSpinner11 size={20} color="#eba417"/></Spin>
            </ContainerFetching>
        }
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

        {isFetching && 
            <ContainerFetching>
              <Spin><ImSpinner11 size={20} color="#eba417"/></Spin>
            </ContainerFetching>
        }
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