
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';

import Image from "next/image"
import imgSlider from "../../../assets/slider/banner01.jpg"

import { Swiper, SwiperSlide } from "swiper/react";

import {
    Container,
    ContainerSlider

} from "./styles";



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { PropsHighlights, useCategory } from '../../../hooks/useCategory';


export function Slider (){

    const { slider } = useCategory<PropsHighlights[]>('/api/products')

    return(
        <Container>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                }}
                style={{width: '100%', flex: '1'}}
            >

                {
                    slider.map(({id, image}:PropsHighlights)=>{
                        return(
                        <SwiperSlide key={id}>
                            <ContainerSlider>
                                <Image src={image} 
                                    alt="img" 
                                    layout="fill"                                              
                                    objectPosition='container'
                                />
                            </ContainerSlider>
                        </SwiperSlide>
                        )
                    })
                }

            </Swiper>

            
        </Container>
    )
}