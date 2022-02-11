import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
    --red: #e52e4d;
    --blue: #5429cc;

    --blue-light: #6933ff;

    --black:#333333;
    
    --grey:#969cb3;
    --grey-50:#E6E6E6;
    --grey-100:#666666;

    --yellow-500: #eba417;

    --background: #FAFAFA;
    --white-50:#F0F0F0;
    --white:#ffffff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

html {
    @media (max-width:1080px){
        font-size: 93.75%
    }
    @media (max-width:720px){
        font-size: 87.5%
    }
}

body {
    background: var(--background);
    -webkit-font-smooth: antialiased;
}

body, input, textarea, button {
    font-family: sans-serif;
    font-weight: 400;
}

h1, h2, h3,h4, h5, h6, strong {
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

// Slider

    //padding das setas
    .swiper-button-next {
        right: 20px;
    }
    .swiper-button-prev {
        left: 20px;
    }

    //cor das setas
    .swiper-button-prev:after, .swiper-button-next:after{
        color: #FFBA08;
    }
  
    //bolinhas de página
    .swiper-pagination-bullet{
        width:10px;
        height:10px;
        background:#999999;
        opacity:1;
    }
  
    //cor da bolinha ativa
    .swiper-pagination-bullet-active{
        background:#FFBA08 ;
    }
  
  //@media(max-width:30em) {
  //  .swiper-button-next {
  //    right: 15px;
  //  }
  //  .swiper-button-prev {
  //    left: 15px;
  //  }
  //
  //  .swiper-button-next:after,
  //  .swiper-button-prev:after {
  //    font-size:1.2rem;
  //  }
  //
  //  .swiper-pagination-bullet{
  //    width:8px;
  //    height:8px;
  //  }
  //}

`