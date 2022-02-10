import { Button } from "./Button";
import { Container } from "./styles";

import { IoMdBeer, IoMdWine, IoIosWine } from "react-icons/io"
import { MdFastfood } from "react-icons/md"
import { BsFillBasket2Fill, BsCupStraw } from "react-icons/bs"


export function Category(){
    return(
        <Container>
            <Button name="Cervejas" icon={<IoMdBeer color="#eba417" fontSize={15}/>}/>
            <Button name="Destilados" icon={<IoMdWine color="#eba417" fontSize={15} />}/>
            <Button name="Vinhos" icon={<IoIosWine color="#eba417" fontSize={20} />}/>
            <Button name="Sem Álcool" icon={<BsCupStraw color="#eba417" fontSize={15} />}/>
            <Button name="Lojinha" icon={<BsFillBasket2Fill color="#eba417" fontSize={15} />}/>           
            <Button name="Comidinhas" icon={<MdFastfood color="#eba417" fontSize={15} />}/>
        </Container>
    )
}