import styled from 'styled-components';

export const Container = styled.div`

.minimize {
  display: none;
	color: rgba(124, 0, 128, 1);
}

.button-about {
	background: rgba(124, 0, 128, 0.5);
}

.button-feedback {
	background: rgba(245, 155, 174, 0.5);
}

.button-help {
	background: rgba(245, 155, 174, 0.5);
}

.div-about {
	display:  block;
	width: 100%;
}

.div-feedback {
	display: none;
	width: 100%;
}

.div-help {
	display: none;
  width: 100%;
}

.help p {
  padding: 0 3rem;
	text-align: left;
}

textarea {
	resize: none;
}

    h2 {
        color: rgba(169,169,169, 1);
        font-weight: bold;
        font-size: 1rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;

        margin: 2rem auto;
        text-align: center;
    }

        h3 {
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        text-align: center;
        position: relative;
        margin: 2rem auto;
      
        font-size: 1rem;    
        margin: 2rem auto;
      }

    img {
        width: auto;
        height: auto;

        border-radius: 50%;
        margin: 0 auto;
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .title-info {
          color: rgba(169,169,169,1);
          font-size: calc(1.3rem + 0.8vmin);
          font-weight: bold;
          margin-top: 0.5rem;

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          color: rgba(169,169,169, 0.9);
          margin-top: 4rem;
          margin-bottom: 2rem;
          width: 100%;
          text-align: center;
          padding: 0 10rem;
      }
    }

      .indicator-active-or-close {

        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        position: relative;
        color: purple;
    }

    position: relative;
`;

export const GroupElementsPlace= styled.div`

    user-select: none;
    position: absolute;
    width: 45vw;
    max-width: 100vw;
    top: calc(100% + 10rem);
    left: calc( 50vw / 2 );
    margin:  0 auto;
    background: rgba(250, 250, 250, 1);
    border-radius: 0.8rem;
    padding: 15px 5px;
    transition: background-color 4s;

    h1 {
      color: rgba(169, 169, 169, 1);
    }

& + div {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    box-shadow: 4px 4px 0 0 rgba(132, 132, 132, 0.5);
} 

    &:hover {
        background: rgba(5, 5, 5, 1);
        transition: background-color  5s;
        z-index: 10;

        .indicator-active-or-close {
          color: rgba(206, 74, 211, 0.8);
        }
    }
    .indicator-active-or-close:active {
        color: rgba(246, 0, 22, 0.9);
    }

    .minimize:active {
      color: rgba(132, 132, 132, 1);
    }

    .maximize:active {
      color: rgba(132, 132, 132, 1);
    }

 .buttons-div {
      display: flex;
      width: 95%;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      flex: 1;

      & + svg {
         display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }

      margin: 0 auto;
      left: 0;
      right: 0;
      position: relative;
    }

    .space-to-final-button {
      width: 5%;
    }

    transition: width 0.2s,  height 0.2s;
`;

export const Description = styled.div`

    color: #fff;
    & + div {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid rgba(255, 255, 255, 0.13);
        width: 100vw;
        height: 7vh;

        display: flex;
        align-items: center;
        justify-content: center;
    } 

    p {
        font-size: 1rem;
        line-height: 18px;
        color: rgba(169,169,169, 0.9);

        width: 100%;
        text-align: center;
        margin: 0.9rem auto;
    }    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.9rem auto;

 &:hover {
    transition: delay 0.2s;
 }
`;

export const Input = styled.input`

    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.8rem;
    margin-top: 2rem;
    margin-bottom: 2rem;

    width: 50vw;
    max-width: 30vw;
    height: 10vh;

    text-align: center;
    color: rgba(167, 167, 167, 1);
    font-weight: bold;
    font-size: 1rem;
    font-style: normal;
    outline: none;

    transition: background-color 0.2s;

    &:hover {
      border: 3px solid purple;
      background: rgba(5, 5, 5, 1);
      color: rgba(196, 161, 41, 1);
    }

    & ::before {
      content: ' ';
      position: absolute;
      left: calc(50% - 5.7rem);
      top: 20px;
      width: 50rem;
      height: auto;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 20px solid rgba(250, 250, 250, 1);
    }

    &::placeholder {
       color: rgba(169, 169, 169, 1);
       font-weight: bold;
       text-align: center;
       font-size: 1rem;
       font-style: italic;
    }

`
export const CardContainer = styled.div`

    display: none;
    justify-content: center;
    flex-direction: column;
    width: auto;
    min-height: 100vh;
    flex: 1;
    margin-top: 2rem;
    position: relative;

`;

export const Card = styled.div`

    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    width: 40vw;
    height: 40vw;

    background: #fff;
    border-radius: 0.8rem;
    font-size: 16px;
    color: #1d1c1c;
    flex: 1;
    margin-bottom: 1rem;

    img {
      width: 35vw;
      height: 35vh;
      align-self: center;
      border-radius: 0.8rem;
    }

    h1 {
      text-align: center;
      color: rgba(169, 169, 169, 1);
    }

     a {
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      font-size: 18px;
    }

    &:hover {
      border: 3px solid purple;
      background: rgba(5, 5, 5, 1);
    }
`;