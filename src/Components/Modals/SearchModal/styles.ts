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
    z-index: 300;
    box-shadow: 2px 3px 5px var(--grey);

    font-size: .85rem;

`
