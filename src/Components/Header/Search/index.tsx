import {HiOutlineSearch} from "react-icons/hi"

import { Container } from "./styles";

export function Search(){
    return(
        <Container>
            <button>
                <HiOutlineSearch fontSize={15} color='#969cb3'/>
            </button>
            <input type="text" placeholder="Pesquise sua bebida favorita"/>
        </Container>
    )
}