import React  from 'react';
import Dock from '../../components/Dock';
import Wallpaper from './wallpaper/styles';
import imgInfo from '../../assets/wallpapers/Wallpaper_Aurora_Oficial.png';

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


   //Basta dois toques  para aumentar em 100vw ou reduzir para 60vw os cards, fun chamada no Container
   function handleonClickToogleSize () {
    const toogleSize = document.querySelector('.group-elements') as HTMLElement;
  
    if (toogleSize.style.width == '45vw') {
      toogleSize.style.width ='100vw';
      toogleSize.style.maxWidth = '100vw';
      toogleSize.style.minHeight = '100vh';
      toogleSize.style.flex = '1';
      toogleSize.style.left='0';
      toogleSize.style.zIndex='20';
      toogleSize.style.borderRadius = '0';
      toogleSize.style.top = '0';
      toogleSize.style.transition= 'width 2s, height 4s';
    } else {
      toogleSize.style.width = '45vw';
      toogleSize.style.minHeight = 'auto'; 
      toogleSize.style.left='calc(50vw / 2)';
      toogleSize.style.zIndex='1';
      toogleSize.style.borderRadius = '0.8rem';
      toogleSize.style.top = 'calc(100% + 7rem)';
      toogleSize.style.transition= 'width 2s, height 4s';
    }
  }


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

   

  return (
  <>
      <Wallpaper />
      <Container onDoubleClick={handleonClickToogleSize}>
        <Dock />
        <GroupElementsInfo
          className="group-elements"
        >
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
              <p>Versão Alfa 0.08</p>
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
    </>  
    );
}