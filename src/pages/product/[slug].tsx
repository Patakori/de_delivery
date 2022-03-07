
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Header } from '../../Components/Header';

import { PropsProducts } from "../../hooks/UseSearch";
import { apiAxios } from '../../services/axios';

import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { IoMdArrowDropright } from 'react-icons/io'
import { RiAddFill, RiSubtractFill } from 'react-icons/ri'

import { 
    Container,
    ContainerRoutes,
    ContainerPath,
    ContainerBack,
    ContainerProduct,
    ContainerImage,
    Containerinfo,
    ContainerName,
    ContainerPrice,
    ContainerAmount,
    ContainerOne,
    ContainerOthersAmount,
    ContainerSix,
    ContainerTen,
    ContainerFifteen,
    ContainerAddCar,
    Containersubtract,
    ContainerTotalAmount,
    ContainerSum,
    ContainerAmountAdd,
    ContainerPriceAdd,
    ContainerMap,

 } from './styles';
import Image from 'next/image';
import { Footer } from '../../Components/Footer';

export default function product(){
    
    const { query : {slug}, asPath, push} = useRouter();
 
    const [getTesteSearch, setGetTesteSearch] = useState<PropsProducts[]>([])

    async function searchIdData(id:any){
        apiAxios.get('/api/products')
        .then((response) => setGetTesteSearch(response.data.data.map((data:any)=>{
            return data.products
        }).flat().filter((products:any)=>{
            return products.id === id
        }) 
    ))} 




    useEffect(() => {   
        searchIdData(slug)

    }, [asPath])

    return(
        <Container>
            <Header/>  

           {
               getTesteSearch.map(({id, name, image, price}:any)=>{
                   return(
                    <ContainerMap>
                            <ContainerRoutes>                               
                                <ContainerPath> Página Inicial <IoMdArrowDropright size={15}/> {name} </ContainerPath>
                                <ContainerBack onClick={()=>{push('/')}}> <HiOutlineArrowNarrowLeft size={25}/> VOLTAR</ContainerBack>
                            </ContainerRoutes>
                
                            <ContainerProduct>
                                <ContainerImage> 
                                    <Image src={image} 
                                            alt="img" 
                                            width={500}  
                                            height={100}                                                                                        
                                            objectFit={'contain'}
                                            
                                            
                                /> </ContainerImage>
                
                
                                <ContainerAmount>
                                    <Containerinfo>
                                        <ContainerName> {name} </ContainerName>
                                        <ContainerPrice> R$ {price} </ContainerPrice>
                                    </Containerinfo>
                                    <ContainerOne>
                                        <Containersubtract> <RiSubtractFill size={25} color="#333333" /> </Containersubtract>
                                        <ContainerTotalAmount> 01 </ContainerTotalAmount>
                                        <ContainerSum><RiAddFill size={25} color="#eba417"/></ContainerSum>
                                    </ContainerOne>
                                    <ContainerOthersAmount>
                                        <ContainerSix>+ 6 un.</ContainerSix>
                                        <ContainerTen>+ 10 un.</ContainerTen>
                                        <ContainerFifteen>+ 15 un.</ContainerFifteen>
                                    </ContainerOthersAmount>
                                    <ContainerAddCar>
                                        <ContainerAmountAdd>ADICIONAR (1)</ContainerAmountAdd>
                                        <ContainerPriceAdd>R$ {price}</ContainerPriceAdd>
                                    </ContainerAddCar>
                                </ContainerAmount>
                
                            </ContainerProduct>
                    </ContainerMap>
                   )
               })
           }
            <Footer/>
        </Container>
    )
}