import styled from "styled-components";

export const ContainerExternal = styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;
    background: rgba( 0, 0, 0, 0 );

    top:0px;
    left: 0px;

    z-index: 300;

    display: flex;
`
export const ContainerInternal = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    background: white;

    width: 240px;
    top: 70px;

    padding: 20px;
    border: none;
    border-radius: 9px;
    margin-left: 60px;
    row-gap: 20px;

    position: absolute;
    z-index: 400;
    box-shadow: 2px 3px 5px var(--grey);

    font-size: .85rem;

    p{
        color: var(--grey);
    }




`
