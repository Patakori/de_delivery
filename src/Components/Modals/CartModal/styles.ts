import styled from "styled-components";

export interface Props {
    type: boolean;
}

export const ContainerExternal = styled.div<Props>`
     display: flex;
    
    width: 100vw;
    height: 100vh;

    position: fixed;
    
    top:0px;
    left: 0px;

    z-index: 400;
    background-color: none;

    animation: ${({type})=>
    {
        if(type === false){
            return 'smokeFinally'
        }
        if(type === true){
            return 'smokeInitial'
        }
    } 
        } 1s forwards;

    @keyframes smokeFinally {
        to {
            background-color: rgba( 0, 0, 0, 0.5 );
            
        }
        from {
            background-color: none;
            
        }
    };

    @keyframes smokeInitial {
        to {
            background-color: none;
            
        }
        from {
            background-color: rgba( 0, 0, 0, 0.5 );
            

        }
    };

`
export const ContainerInternal = styled.div<Props>`
    display: flex;
    flex-direction: column;

    background: white;

    top:0;
    right: 0px;
    height: 100vh;
    width: 400px;

    border: none;
    margin-left: 60px;

    position: fixed;
    z-index: 500;
    box-shadow: 2px 3px 5px var(--grey);

    font-size: .85rem;

    p{
        color: var(--grey);
    }

    animation: ${({type})=>
    {
        if(type === false){
            return 'go-close'
        }
        if(type === true){
            return 'go-open'
        }
    } 
        } 1s;

    @keyframes go-close {
        0% {
            transform: translateX(400px);
        }
        100% {
            transform: translateX(0);
        }
    };

    @keyframes go-open {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(400px);
        }
    };

`

export const ContainerBag = styled.div`
    display: flex;
    align-items: center;

    text-align: center;

    padding: 20px;

    width: 100%;
    height: 60px;


    >h1{
        width: 100%;
        font-size: 1rem;
        padding-left: 50px;
        
    }

    >button{
        display: flex;
        align-items: center;
        justify-content: center;

        height: 40px;
        width: 40px;
        
        border: none;
        background-color: white;

        margin-right: 20px;

        font-size: 1.250rem;
    }

`