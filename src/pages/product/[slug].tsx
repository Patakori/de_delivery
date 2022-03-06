
import dynamic from 'next/dynamic';
import Router from 'next/router';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

import { Header } from '../../Components/Header';

import { ContextSearch, PropsProducts } from "../../hooks/UseSearch";
import { apiAxios } from '../../services/axios';

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

export default function product(){
    
    const { query : {slug}, asPath} = useRouter();
 
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
               getTesteSearch.map(({id, name}:any)=>{
                   return(
                    <ContainerMap>
                            <ContainerRoutes>
                                
                                <ContainerPath>Página Inicial {name} </ContainerPath>
                                <ContainerBack>Voltar {id} </ContainerBack>
                            </ContainerRoutes>
                
                            <ContainerProduct>
                                <ContainerImage></ContainerImage>
                
                                <Containerinfo>
                                    <ContainerName></ContainerName>
                                    <ContainerPrice></ContainerPrice>
                                </Containerinfo>
                
                                <ContainerAmount>
                                    <ContainerOne>
                                        <Containersubtract></Containersubtract>
                                        <ContainerTotalAmount></ContainerTotalAmount>
                                        <ContainerSum></ContainerSum>
                                    </ContainerOne>
                                    <ContainerOthersAmount>
                                        <ContainerSix></ContainerSix>
                                        <ContainerTen></ContainerTen>
                                        <ContainerFifteen></ContainerFifteen>
                                    </ContainerOthersAmount>
                                    <ContainerAddCar>
                                        <ContainerAmountAdd></ContainerAmountAdd>
                                        <ContainerPriceAdd></ContainerPriceAdd>
                                    </ContainerAddCar>
                                </ContainerAmount>
                
                            </ContainerProduct>
                    </ContainerMap>
                   )
               })
           }

        </Container>
    )
}