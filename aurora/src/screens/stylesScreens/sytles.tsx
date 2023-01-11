import styled from 'styled-components';

export const Container = styled.div`

.read-post {
    display: block;
    transition: background 0.2s;
    }

    width: 100vw;
    min-height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 0;
    top: 0;

    position: fixed;
    z-index: 1;
    overflow-y: hidden;

    a {
        text-decoration: none;
        color: rgba(169, 169, 169, 0.9);
    }
`;


export const CardGroups = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  
    z-index: 5;

    width: 100vw;
    min-height: auto;
    margin-top: 8rem;

    &:hover {
        height: 100vh;
    }

`;

export const HeaderCard = styled.header`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;

    width: 100%;

    indicator-active-or-disable {
        
        top: auto;
        left: 2rem;
        position: relative;
        color: rgba(169, 169, 169, 0.9);

        width: 100%;
    }

`;

export const CardTitle = styled.h1`

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

`;


export const Card = styled.article`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60vw;
    height: auto;
    background: rgba(250, 250, 250, 0.8);
    margin-bottom: 5rem;
    transition: width 2s , height  4s;
  
    position: relative;

    text-align: left;
    z-index: 2;
    border-radius: 0.8rem;

    & + span {
      width: 100vw;
      max-width: 100vw;
      height: 2vh;
    }

    p {
        font-size: calc(1rem + 2vmin);
        color: rgba(169, 169, 169, 0.9);
        width: 50% ;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

    &:hover {
        //width: 100vw;
        min-height: auto;
        top: 0;
        bottom: 50%auto;
        margin-top: auto;
        margin-bottom: auto;
        padding: 10% 0 25% 0;
        transition: background-color  2s;
        transition: width 4s , height  2s;
        flex-grow: auto;
        flex-direction: column;

        background: rgba(5, 5, 5, 1);
        border-radius: 0.8rem 0.8rem 0 0;
        z-index: 5;
       

        .board-scroll {
          z-index: 15;
        }

        .read-post {
          z-index: 15;
          height: 100vh;
          overflow-y: auto;

        }

        .img-description-zero-left {
            left: 0;
        }

        .indicator-active-or-disable {
            color: purple;
        }

        span {
          min-height: 6vh;
        }

        a {
            color: purple;
        }

        h1 {
            color: purple;
        }

    }
`;

export const ImageCard = styled.img`

    width: 45vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 1rem auto;
    bottom: 0.8rem;
  
    left: calc(50vw - 58vw);
    position: relative;

    &:hover {

        width: 50vw;
        height: auto;
        border-radius: 0.8rem;
        transition: width 2s, heigth 0.2s;
    }
`;