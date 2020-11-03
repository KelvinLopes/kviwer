import React  from 'react';
import { FaCircle } from 'react-icons/fa';
import { FiMaximize2, FiMinimize2 } from 'react-icons/fi';
import Dock from '../../components/Dock';

import {
  Container,
  Description,
  GroupElementsInfo,
  GroupButtons,
  Button,
  ButtonBody,
  TextArea,
  TextButtonAboutSubmit
}
  from './styles/styles';

export default function Info() {

  const imgInfo = "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

  function Feedback() {

    const buttonAbout = document.querySelector('.button-about') as HTMLElement;
    const buttonFeedBack = document.querySelector('.button-feedback') as HTMLElement;
    const buttonHelp = document.querySelector('.button-help') as HTMLElement;

    const divFeedback = document.querySelector('.div-feedback') as HTMLElement;
   const divAbout = document.querySelector('.div-about') as HTMLElement;
    const divHelp = document.querySelector('.div-help') as HTMLElement;
    const img = document.querySelector('.img') as HTMLElement;
    const titleInfo = document.querySelector('.title-info') as HTMLElement;

    divFeedback.style.display = 'block';
    divHelp.style.display = 'none';
    divAbout.style.display = 'none';
    img.style.display = 'block';
    titleInfo.style.display = 'none';

    if(divHelp.style.display === 'none' &&  divAbout.style.display === 'none') {
      buttonFeedBack.style.background = 'rgba(124, 0, 128, 0.5)';
      buttonAbout.style.background = 'rgba(250, 174, 190, 0.5)';
      buttonHelp.style.background = 'rgba(250, 174, 190, 0.5)';
    }
  }

    function About() {

    const buttonAbout = document.querySelector('.button-about') as HTMLElement;
    const buttonFeedBack = document.querySelector('.button-feedback') as HTMLElement;
    const buttonHelp = document.querySelector('.button-help') as HTMLElement;

    const divFeedback = document.querySelector('.div-feedback') as HTMLElement;
    const divAbout = document.querySelector('.div-about') as HTMLElement;
    const divHelp = document.querySelector('.div-help') as HTMLElement;
    const img = document.querySelector('.img') as HTMLElement;
    const titleInfo = document.querySelector('.title-info') as HTMLElement;

    divFeedback.style.display = 'none';
    divHelp.style.display = 'none';
    divAbout.style.display = 'block';
    img.style.display = 'block';
    titleInfo.style.display = 'block';

    if(divHelp.style.display === 'none' &&  divFeedback.style.display === 'none') {
      buttonFeedBack.style.background = 'rgba(250, 174, 190, 0.5)';
      buttonAbout.style.background = 'rgba(124, 0, 128, 0.5)';
      buttonHelp.style.background = 'rgba(250, 174, 190, 0.5)';
    }
  }

    function Help() {

    const buttonAbout = document.querySelector('.button-about') as HTMLElement;
    const buttonFeedBack = document.querySelector('.button-feedback') as HTMLElement;
    const buttonHelp = document.querySelector('.button-help') as HTMLElement;

    const divFeedback = document.querySelector('.div-feedback') as HTMLElement;
    const divAbout = document.querySelector('.div-about') as HTMLElement;
    const divHelp = document.querySelector('.div-help') as HTMLElement;
    const img = document.querySelector('.img') as HTMLElement;
    const titleInfo = document.querySelector('.title-info') as HTMLElement;

    divFeedback.style.display = 'none';
    divHelp.style.display = 'block';
    divAbout.style.display = 'none';
    img.style.display = 'block';
    titleInfo.style.display = 'block';

    if(divAbout.style.display === 'none' &&  divFeedback.style.display === 'none') {
      buttonFeedBack.style.background = 'rgba(245, 155, 174, 0.5)';
      buttonAbout.style.background = 'rgba(250, 174, 190, 0.5)';
      buttonHelp.style.background = 'rgba(124, 0, 128, 0.5)';
    }
  }

    function resizeScreenMaxButton() {

    const minimizeButton = document.querySelector('.minimize') as HTMLElement;
    const maximizeButton = document.querySelector('.maximize') as HTMLElement;
    const groupElements = document.querySelector('.group-elements') as HTMLElement;

      groupElements.style.width = '45vw';

      if (groupElements.style.width === '45vw') {
          groupElements.style.width = '100vw';
           groupElements.style.maxWidth = '100vw';
          groupElements.style.height = '100vh';
          groupElements.style.flex = '1';
          groupElements.style.left='0';
          minimizeButton.style.display = 'block';
          maximizeButton.style.display = 'none';
          minimizeButton.style.color = 'rgba(124, 0, 128, 1)';
          groupElements.style.borderRadius = '0';
          groupElements.style.top = '0';
          groupElements.style.transition= 'width 2s, height 4s';
      }
  }

   function resizeScreenMinButton() {

    const minimizeButton = document.querySelector('.minimize') as HTMLElement;
    const maximizeButton = document.querySelector('.maximize') as HTMLElement;
    const groupElements = document.querySelector('.group-elements') as HTMLElement;

    groupElements.style.width = '100vw';

       if (groupElements.style.width === '100vw') {
          groupElements.style.width = '45vw';
          groupElements.style.height = 'auto';
          groupElements.style.left='calc(50vw / 2)';
         groupElements.style.flex = '1';
          minimizeButton.style.display = 'none';
          maximizeButton.style.display = 'block';
          maximizeButton.style.color = 'rgba(124, 0, 128, 1)';
          groupElements.style.borderRadius = '0.8rem';
          groupElements.style.top = 'calc(100% + 7rem)';
          groupElements.style.transition= 'width 2s, height 4s';
      }
    }

  return (
    <Container>
      <Dock />
      <GroupElementsInfo
        className="group-elements"
      >
        <div className="buttons-div">
          <FaCircle
            className="indicator-active-or-close"
            size={30}
            title='Fechar'
          />

         <span className="space-to-final-button"> </span>

          <FiMaximize2
            className="indicator-resize maximize"
            size={25}
            onClick={resizeScreenMaxButton}
            color="rgba(124, 0, 128, 1)"
            title="Maximizar"
          />

          <FiMinimize2
            className="indicator-resize minimize"
            size={25}
            onClick={resizeScreenMinButton}
            color="rgba(124, 0, 128, 1)"
            title="Restaurar"
          />

        </div>

        <GroupButtons>
          <Button className="text-button button-about" onClick={About}>Sobre</Button>
          <Button className="text-button button-feedback" onClick={Feedback}>Feedback</Button>
          <Button className="text-button button-help" onClick={Help}>Ajuda</Button>
        </GroupButtons>

        <Description>
          <img
            className="img"
            src={imgInfo}
            alt="Info img"
            draggable={false}
          />
          <div className="div-about">
            <h2 className="title-info">Aurora</h2>
            <p>Versão Alfa</p>
            <p>Em desenvolvimento com ReactJS e outras tecnologias</p>
          </div>

          <div className="div-feedback">
            <p>
              Viu alguma coisa errada,
              layout querbrado, sugestões
              elogios, aqui é o lugar certo!
              Envie seu feedback.
            </p>
            <TextArea />
            <ButtonBody>
              <TextButtonAboutSubmit>
                Enviar
                </TextButtonAboutSubmit>
            </ButtonBody>
          </div>

          <div className="div-help">
            <h3>Aprenda a usar</h3>
            <p>Em breve mais novidades aqui</p>
          </div>
        </Description>
      </GroupElementsInfo>
    </Container>

  );
}