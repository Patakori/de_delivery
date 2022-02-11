
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

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


export function Slider (){
    return(
        <Container>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                }}
                style={{width: '100%', flex: '1'}}
            >

                <SwiperSlide>
                    <ContainerSlider>
                        <Image src={imgSlider} alt="img"/>
                    </ContainerSlider>
                </SwiperSlide>
                
                <SwiperSlide>
                    <ContainerSlider>
                        <Image src={imgSlider} alt="img"/>
                    </ContainerSlider>
                </SwiperSlide>
                
                <SwiperSlide>
                    <ContainerSlider>
                        <Image src={imgSlider} alt="img"/>
                    </ContainerSlider>
                </SwiperSlide>


            </Swiper>

            
        </Container>
    )
}