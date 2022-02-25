import styled from "styled-components";

export interface Props {
    type: boolean;
}

export const ContainerExternal = styled.div<Props>`
    width: 100vw;
    height: 100vh;

    position: fixed;

    top:0px;
    left: 0px;

    z-index: 100;

    display: flex;

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
    justify-content: center;
    flex-direction: column;

    background: white;

    width: 100%;
    top: 100px;

    padding: 20px;
    border: none;
    border-radius: 9px;

    row-gap: 20px;

    position: sticky;
    z-index: 200;
    box-shadow: 2px 3px 5px var(--grey);

    font-size: .85rem;

    animation: ${({type})=>
    {
        if(type === false){
            return 'go-close'
        }
        if(type === true){
            return 'go-open'
        }
    } 
        } 2s;

    @keyframes go-close {
        0% {
            transform: translateX(0);
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
            transform: translate(0);
        }
    };

`
