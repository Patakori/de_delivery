import styled from "styled-components";

export const ContainerExternal = styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;
    background: rgba( 0, 0, 0, 0.5 );

    top:0px;
    left: 0px;

    z-index: 20;

    display: flex;

`
export const ContainerInternal = styled.div`
    display: flex;
    flex-direction: column;

    background: white;

    top:0;
    right: 0px;
    height: 100vh;
    width: 30%;

    border: none;
    margin-left: 60px;

    position: fixed;
    z-index: 300;
    box-shadow: 2px 3px 5px var(--grey);

    font-size: .85rem;

    p{
        color: var(--grey);
    }




`
