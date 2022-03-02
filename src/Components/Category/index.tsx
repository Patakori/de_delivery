

import { ContainerCategory } from "./styles"
import { ButtonCategorys } from "./ButtonCategorys"

import { IoMdBeer, IoMdWine, IoIosWine } from "react-icons/io"
import { MdFastfood } from "react-icons/md"
import { BsFillBasket2Fill, BsCupStraw } from "react-icons/bs"

export function Category(){
    return(
        <ContainerCategory>
            <ButtonCategorys name="Cervejas" icon={<IoMdBeer color="#eba417" fontSize={15}/>}/>
            <ButtonCategorys name="Destilados" icon={<IoMdWine color="#eba417" fontSize={15} />}/>
            <ButtonCategorys name="Vinhos" icon={<IoIosWine color="#eba417" fontSize={20} />}/>
            <ButtonCategorys name="Sem Álcool" icon={<BsCupStraw color="#eba417" fontSize={15} />}/>
            <ButtonCategorys name="Lojinha" icon={<BsFillBasket2Fill color="#eba417" fontSize={15} />}/>           
            <ButtonCategorys name="Comidinhas" icon={<MdFastfood color="#eba417" fontSize={15} />}/>
        </ContainerCategory>
    )
}