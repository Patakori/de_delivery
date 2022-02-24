import { useState } from "react";
import {HiOutlineSearch} from "react-icons/hi"
import { Category } from "../../Category";
import { SearchModal } from "../../Modals/SearchModal/indext";

import { Container, ContainerSearch } from "./styles";

export function Search(){

    const [modal, setModal] = useState(false)

    function handleOpenModal(){
        setModal(true)
      }
      
      function handleCloseModal(){
        setModal(false)
      }

    return(
        <Container>
            <ContainerSearch>
                <button>
                    <HiOutlineSearch fontSize={15} color='#969cb3'/>
                </button> 
                <input onClick={handleOpenModal} type="text" placeholder="Pesquise sua bebida favorita"/>
            </ContainerSearch>
            {
                modal?
                    <SearchModal onClose={handleCloseModal}>
                        <p>modal</p>
                    </SearchModal> : null
            }

        </Container>
    )
}