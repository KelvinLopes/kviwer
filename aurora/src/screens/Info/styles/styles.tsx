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

    position: relative;
`;

export const GroupElementsInfo = styled.div`

    user-select: none;
    position: absolute;
    width: 45vw;
    max-width: 100vw;
    top: calc(100% + 7rem);
    left: calc( 50vw / 2 );
    margin:  0 auto;
    background: rgba(250, 250, 250, 0.9);
    border-radius: 0.8rem;
    padding: 15px 5px;
  transition: background-color 4s;

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
export const ButtonBody = styled.button`

    width: 18vw;
    height: 6vh;

    background: rgba(250, 174, 190, 0.5);
    border: solid 1px pink;
    border-radius: 0.8rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0.5rem auto;
    bottom: 0;

    outline: none;

    transition: background-color 0.2s;

    &:hover {
      background: rgba(250, 174, 190, 0.9);
    }

      &:active {
      background: rgba(250, 174, 190, 0.5);

      .text-button {
        color: rgba(250, 250, 250, 0.5);
      }
    }
    cursor: pointer;
`;

export const TextButtonAboutSubmit = styled.text`
    border: 0;
    color: rgba(209, 105, 161, 0.9);
    font-weight: bold;
    font-size: 1.5rem;

    display: flex;
    justify-content: center;
    margin: 0 auto;
`;

export const  TextArea = styled.textarea`

    width: 30vw;
    min-height: 7rem;
    flex: 1;
    margin: 0.5rem auto;
    position: relative;

    display : flex;
    align-items: center;
    justify-content: center;

   & + textarea { 
      resize: none;
      padding: 1.6rem;
      line-height: 28px;
   } 

    border-radius: 0.8rem;
    background: rgba(250, 250,250, 0.4);

    color: rgba(250, 250, 250, 0.5);
    font-size: 1rem;
    font-family: Ubuntu-Bold;

    p {
      font-size: 1rem;
      line-height: 18px;
      color: rgba(250, 250, 250, 0.9);

      width: 100%;
      text-align: center;
      margin: -7rem auto;
  
    }
`;

export const Description = styled.div`

    color: #fff;
    & + div {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid rgba(255, 255, 255, 0.13);
        width: 100vw;

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

export const GroupButtons = styled.ul`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & + ul {
    width: 100vw;
    flex: 1;
    flex-wrap: wrap;
    position: relative;
  }
`;

export const Button = styled.li`

   margin-left: 0.8rem;
   margin-top: 0.4rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    width: 15vw;
    height: 4vh;

    background: purple;
    color: rgba(169, 169, 169, 0.9);
    font-size: calc(100vw *  1rem);

    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
        background: rgba(250, 250, 250, 0.9);
        color: #f1f1f1;
    }

     &:active {
        background: rgba(250, 175, 190, 0.5);

        .text-button {
        color: rgba(5, 5, 5, 1);
      }
    }

`;