import styled from 'styled-components';

export const Container = styled.div`

 .read-post {
        display: none;
        transition: background 0.2s;
    }

    width: 100vw;
    min-heigth: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 0;
    top: 0;

    position: relative;

`;

export const Header = styled.header`

    width: 100vw;
    min-heigth: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 0;
    top: 0;

    position: relative;


    .show-hidden-post {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: relative;

        width: 100%;

        top: 8rem;
        margin-left: -35rem;
        z-index: 4;

        cursor: pointer;
    }

    .show-hidden-post:hover {
        zoom: 107%;
    }

    .show-hidden-post:active {
        color: green;
    }

    .message-post {

        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;

        color: rgba(169, 169, 169, 0.9);

        margin-top: 7rem;
    }

    .message-post {
        color: purple;
    }

`;

export const FirstImg = styled.img`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 45vw;
    heigth: auto;

    top: 5rem;
    border-radius: 0.8rem;
    position: relative;

    user-select: none;

    &:hover {

        border-radius: 0.8rem;
        -webkit-box-shadow: 10px 10px 5px 5px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 5px 5px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 5px 5px rgba(0,0,0,0.75);
        transition: delay 0.2s;
    }

`;

export const BackgroundImg = styled.img`

    width: 100vw;
    heigth: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    top: 0;
    left: 0;
    position: fiixed;
`;

export const GroupElements = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    margin-top: 20rem;


    
`;

export const HeaderToDescriptionToPage = styled.header`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    indicator-active-or-disable {
        
       
        top: auto;
        left: 2rem;
        position: relative;
        color: rgba(169, 169, 169, 0.9);

        width: 100%;
    }

    h1 {

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        
        color: rgba(169, 169, 169, 0.9);
        font-size: calc(1.3rem + 0.8vmin);
        margin-top: 4rem;
        margin-bottom: 2rem;
        width: 100%;

        text-align: center;
        padding: 0 10rem;
    }

`;

export const DescriptionToPage = styled.article`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60vw;
    heigth: auto;
    background: rgba(250, 250, 250, 0.5);
    margin-bottom: 5rem;

    position: relative;

    text-align: left;
    z-index: 1;
    border-radius: 0.8rem;

    p {
        font-size: calc(1rem + 2vmin);
        color: rgba(169, 169, 169, 0.9);
        width: 50%;
    }

    &:hover {
        width: 100vw;
        heigth: 210vh;
        margin-top: auto;
        margin-bottom: auto;
        transition: width 2s; height 0.2s;

        background: rgba(5, 5, 5, 1);
        border-radius: 0.8rem 0.8rem 0 0;
        z-index: 5;

        h1 {
            color: purple;
        }

        .img-description-zero-left {
            left: 0;
        }

        indicator-active-or-disable {
            color: purple;
        }

    }
`;

export const ImgToDescription = styled.img`

    width: 45vw;
    heigth: auto;
    display: flex;
    flex-direction: column;
    align-itmes: center;
    justify-content: center;

    magin: 2rem auto;
    bottom: 0.8rem;
    left: -5rem;

    position: relative;

    &:hover {

        width: 50vw;
        heigth: auto;
        border-radius: 0.8rem;
        transition: width 2s, heigth 0.2s;
    }
`;