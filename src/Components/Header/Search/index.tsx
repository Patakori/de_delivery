import { useContext, useState } from "react";

import Image from "next/image";

import { SearchModal } from "../../Modals/SearchModal";
import { ButtonCategorys } from "../../Category/ButtonCategorys/index";

import { BsCupStraw, BsFillBasket2Fill } from "react-icons/bs";
import {HiOutlineSearch} from "react-icons/hi"
import { IoIosWine, IoMdBeer, IoMdWine } from "react-icons/io";
import { MdFastfood } from "react-icons/md";

import { 
    Container, 
    ContainerSearch, 
    ContainerButtonSearch,
    ContainerCategory,
    ContainerButtons,
    ContainerFetching,
    ContainerSpin,
    ContainerList,
    ConainerListImage,
    ConatinerListInfo,
    ContainerListName,
    ContainerListPrice,
    ContainerExternalList,




} from "./styles";

import { ContextSearch } from "../../../hooks/UseSearch";
import { ImSpinner11 } from "react-icons/im";
import { useRouter } from "next/router";

export interface PropsProductsArray {
    products:{
      id: string,
      price: string,
      name: string,
      image?: any,
    }
}[]

export interface PropsProducts {
    id: string,
    price: string,
    name: string,
    image?: any,
}[]

export interface PropsData {

  category:string,
  products: PropsProducts[],

}

export interface PropsGetSearch {
    getSearch:string;
}

export interface PropsType{
  type?:string;
}


export function Search({type}:PropsType){

    const { 
      getSearch,
      setGetSearch,
      respSearch,
      isFetching,
      
    }:any = useContext(ContextSearch)

    const router = useRouter()

    const [modal, setModal] = useState(false)

    function handleOpenModal(){
        setModal(true)
        setGetSearch('')
      }
      
      function handleCloseModal(){
        setModal(false)
      }

    return(
        <Container>
            <ContainerSearch>
                <ContainerButtonSearch>
                    <HiOutlineSearch fontSize={15} color='#969cb3'/>
                </ContainerButtonSearch> 
                <input 
                    onClick={handleOpenModal} 
                    type="text" 
                    placeholder="Pesquise sua bebida favorita"
                    onChange={(e:any) => setGetSearch(e.target.value)}
                    value={getSearch}
                    />
            </ContainerSearch>
            {
                modal?
                    <SearchModal onClose={handleCloseModal}>  
                       
                         <ContainerCategory>
                             <ContainerExternalList type={getSearch}>
                                {isFetching?
                                  <ContainerFetching>
                                    <ContainerSpin><ImSpinner11 size={20} color="#eba417"/></ContainerSpin>
                                  </ContainerFetching>:
                                    respSearch.map(({name, id, price, image}:PropsProducts)=>{
                                        return(
                                          <ContainerList key={id} 
                                          onClick={() =>{ 
                                            router.push(`/product/${id}`)
                                            }}>                                      
                                            <ConainerListImage>
                                              <Image src={image} alt="img" width={100}  height={100}/>
                                            </ConainerListImage>

                                            <ConatinerListInfo>
                                              <ContainerListName>{name}</ContainerListName>
                                              <ContainerListPrice>{price}</ContainerListPrice>
                                            </ConatinerListInfo>

                                          </ContainerList>
                                        )
                                    }) 
                                  }
                                
                             </ContainerExternalList>
                             <ContainerButtons>
                                <div>
                                    <ButtonCategorys name="Cervejas" icon={<IoMdBeer color="#eba417" fontSize={15}/>}/>
                                    <ButtonCategorys name="Vinhos" icon={<IoIosWine color="#eba417" fontSize={20} />}/>
                                    <ButtonCategorys name="Lojinha" icon={<BsFillBasket2Fill color="#eba417" fontSize={15} />}/> 
                                    
                                </div>
                                <div>
                                    <ButtonCategorys name="Destilados" icon={<IoMdWine color="#eba417" fontSize={15} />}/>          
                                    <ButtonCategorys name="Sem Álcool" icon={<BsCupStraw color="#eba417" fontSize={15} />}/>
                                    <ButtonCategorys name="Comidinhas" icon={<MdFastfood color="#eba417" fontSize={15} />}/>
                                </div>
                             </ContainerButtons>

                         </ContainerCategory>
             
                    </SearchModal> : null
            }

        </Container>
    )
}