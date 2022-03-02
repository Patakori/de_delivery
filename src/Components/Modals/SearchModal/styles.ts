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
                return 'overlayFinally'
            }
            if(type === true){
                return 'overlayInitial'
            }
        } 
            } 1s forwards;
        
        @keyframes overlayFinally {
            to {
                background-color: rgba( 0, 0, 0, 0.5 );
                
            }
            from {
                background-color: none;
                
            }
        };
        
        @keyframes overlayInitial {
            to {
                background-color: none;
                
            }
            from {
                background-color: rgba( 0, 0, 0, 0.5 );
                
            
            }
        };
`
export const ContainerInternal = styled.div<Props>`
    width: 100%;
    display: flex;
    flex-direction: column;

    background: white;

    border: none;
    border-radius: 9px;

    position: sticky;
    z-index: 200;
    box-shadow: 2px 3px 5px var(--grey);

    animation: ${({type})=>
    {
        if(type === false){
            return 'closeSearch'
        }
        if(type === true){
            return 'openSearch'
        }
    } 
        } 1s;

    @keyframes closeSearch {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    };

    @keyframes openSearch {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    };

`
