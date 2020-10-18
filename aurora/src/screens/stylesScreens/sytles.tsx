import styled from 'styled-components';

export const Container = styled.div`

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
        justify-content: flex-start;

        top: 8rem;
        left: -0.98rem;
        z-index: 4;

        cursor: pointer;
    }

    .show-hidden-post:active {
        color: background: linear-gradient(154.16deg, #fdf8f5 7.85%, #FFFFFF 91.03%);
    }

    .message-post {

        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;

        color: rgba(169, 169, 169, 0.9);
    }

    .message-post {
        color: purple;
    }

`;

export const FirstImg = styled.img`

    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 50vw;
    heigth: auto;

    margin-top: 5rem;
    border-radius: 0.8rem;
    position: relative;

    user-select: none;

    &:hover {
        width: 700vw;
        height: auto;
        border-radius: 0.8rem;
        transition: width 2s, height 0.2s;
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
    margin-top: 2rem;


     .read-post {
        display: none;
        transition: background 0.2s;
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

    h1 {
        
        color: rgba(169, 169, 169, 0.9);
        font-size: calc(1.3rem + 0.8vmin);
        margin-top: 4rem;
        margin-bottom: 2rem;
        width: 50%;

        text-align: center;
    }

    p {
        font-size: calc(1rem + 2vmin);
        color: rgba(169, 169, 169, 0.9);
        width: 50%;
    }

    indicator-active-or-disable {
        
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        top: 1rem;
        left: -23rem;
        position: relative;
        color: rgba(169, 169, 169, 0.9);
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
    left: -5rem;

    position: relative;

    &:hover {

        width: 50vw;
        heigth: auto;
        border-radius: 0.8rem;
        transition: width 2s, heigth 0.2s;
    }
`;