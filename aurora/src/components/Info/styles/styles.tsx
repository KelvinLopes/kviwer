import styled from 'styled-components';

export const Container = styled.div`

  z-index: 17;
  &:hover {
    z-index: 17;
  }

.minize {
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

        left: 0.8rem;
        margin: 2rem auto;
        text-align: center;
    }

    img {
        width: 10vw;
        height: auto;

        border-radius: 50%;
      
        border-radius: 1rem;
        margin: 1.5rem auto;
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

        img {
          width: 10vw;
          height: auto;

          border-radius: 50%;
          margin: 0 auto;
          top: 1rem;
          position: relative;

          display: flex;
          flex-direction: column;
          justify-self: center;
        }
    }

    .indicator-active-or-close {
        color: purple;

        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;

        position: relative;
        left: calc(50% - 19rem);
    }

    .indicator-active-or-close:hover {
        color: red;
    }

    position: relative;
    z-index: 6;
`;

export const GroupElementsInfo = styled.div`

    position: absolute;
    width: 40rem;
    left: calc(50% - 32rem);
    top: calc(100% + 0.8rem);
    margin:  0 auto;
    top: -0.5rem;
    background: rgba(250, 250, 250, 0.9);
    border-radius: 0.8rem;
    padding: 15px 5px;
    display: ${(props: { visible: boolean}) => (props.visible ? 'flex' : 'none' ) };
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover {
        background: rgba(5, 5, 5, 1);
        transition: delay 0.5s;

        .indicator-active-or-close {
          color: rgba(124,0, 128, 0.8);
        }
    }

    .minize:active {
      color: rgba(132, 132, 132, 1);
    }

    .maximize:active {
      color: rgba(132, 132, 132, 1);
    }

    .buttons-div {
      display: flex;
      width: 95%;;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .space-to-final-button {
      width: 5%;
    }

    z-index: 10;
    transition: width 0.2s height 0.2s;

`;

export const ButtonBody = styled.button`

    width: 180px;
    height: 64px;

    background: rgba(250, 174, 190, 0.5);
    border: solid 1px pink;
    border-radius: 0.8rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 1rem auto;

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

    min-height: 7rem;
    width: 30rem;
    max-width: 50rem;
    resize: none;
    padding: 1.6rem;
    line-height: 28px;
    margin: 0.8rem auto;

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

    p {
        font-size: 1rem;
        line-height: 18px;
        color: rgba(169,169,169, 0.9);

        width: 50%;
        text-align: center;
        margin: 0.9rem auto;
    }    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.9rem auto;

 &:hover {
     background: rgba(5, 5, 5, 0.9);
     transition: delay 0.2s;
 }
}
`;

export const OpenClose = styled.button`

    background: none;
    border: 0;
    position: relative;

`;

export const GroupButtons = styled.ul`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    position: relative;

`;

export const Button = styled.li`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    margin-left: 2rem;
    width: 10rem;
    height: 2rem;

    background: purple;
    color: rgba(169, 169, 169, 0.9);
    font-size: 1rem;

    border-radius: 0.5rem;

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