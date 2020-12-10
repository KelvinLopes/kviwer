import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { FiMaximize2, FiMinimize2 } from 'react-icons/fi';
import { MdPlace } from 'react-icons/md';
import Dock from '../../components/Dock';
import Wallpaper from './wallpaper/styles';
import imgInfo from '../../assets/logo.svg';

import {
  Container,
  Description,
  GroupElementsPlace,
  Input,
  CardContainer,
  Card,
}
  from './styles/styles';


export default function Places() {

    function resizeScreenMaxButton() {

    const minimizeButton = document.querySelector('.minimize') as HTMLElement;
    const maximizeButton = document.querySelector('.maximize') as HTMLElement;
    const groupElements = document.querySelector('.group-elements') as HTMLElement;

      groupElements.style.width = '45vw';

      if (groupElements.style.width === '45vw') {
          groupElements.style.width = '100vw';
          groupElements.style.maxWidth = '100vw';
          groupElements.style.minHeight = '100vh';

          groupElements.style.flex = '1';
          groupElements.style.left='0';
          groupElements.style.zIndex='20';
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
          groupElements.style.minHeight = 'auto';
          
          groupElements.style.left='calc(50vw / 2)';
          minimizeButton.style.display = 'none';
          maximizeButton.style.display = 'block';
          groupElements.style.zIndex='1';
          maximizeButton.style.color = 'rgba(124, 0, 128, 1)';
          groupElements.style.borderRadius = '0.8rem';
          groupElements.style.top = 'calc(100% + 7rem)';
          groupElements.style.transition= 'width 2s, height 4s';
      }

    }

    function handleShowHidePlaces( ) {

        const readPost= document.querySelector('.places') as HTMLElement;
        const hiddenShowPost = document.querySelector('.show-hidden-post') as HTMLElement;


        if(readPost.style.display === 'none') {
            readPost.style.display = 'flex';
        }else {
            readPost.style.display = 'none';
        }
    }

  return (
  <>
      <Wallpaper />
      <Container>
        <Dock />
        <GroupElementsPlace
          className="group-elements"
        >
          <div className="buttons-div">
            <FaCircle
              className="indicator-active-or-close"
              size={30}
              title='Você está em Aurora Places'
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

          <Description>
          <MdPlace
            className="circle-icon"
            color="rgba(141, 144, 215, 1)"
            size="7rem"
            title="Places"
          />

          <h1>Aurora Places</h1>

           <Input placeholder="Faça sua busca" className="input"/>

           <FaCircle 
              className="show-hidden-post"
              color="rgba(141, 144, 215, 1)"
              size={30}
              title="Mostrar/ocultar Places"
              onDoubleClick={handleShowHidePlaces}
            />

          <CardContainer className="places">
           <Card className="card">
             <h1>Sorveteria Jupiter</h1>
             <img className="img-card" src="https://images.unsplash.com/photo-1593700861848-8455c0eeeece?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="img-info-buness" />
             <div>
              <p>A melhor sorveteria do bairro</p>
             </div>
             <a href="#">Veja mais</a> 
           </Card>

           <Card className="card">
             <h1>Curso de informática</h1>
             <img className="img-card" src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="img-info-buness" />
             <div>
              <p>venha melhorar ou adquirir conhecimento</p>
             </div>
             <a href="#">Veja mais</a> 
           </Card>

           <Card className="card">
             <h1>Mecânica Express</h1>
             <img className="img-card" src="https://images.unsplash.com/photo-1596986952526-3be237187071?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="img-info-buness" />
             <div>
              <p>Aqui seu carro fica pronto rápido</p>
             </div>
             <a href="#">Veja mais</a> 
           </Card>

           <Card className="card">
             <h1>Manutenção de PCs & Laptops</h1>
             <img className="img-card" src="https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="img-info-buness" />
             <div>
              <p>Precisou chamou, faça seu orçamento</p>
             </div>
             <a href="#">Veja mais</a> 
           </Card>

           <Card className="card">
             <h1>Manutenção de Smartphones</h1>
             <img className="img-card" src="https://images.unsplash.com/photo-1566728595340-a0484f0494e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="img-info-buness" />
             <div>
              <p>Um preço que cabe no seu bolso</p>
             </div>
             <a href="#">Veja mais</a> 
           </Card>

           <Card className="card">
             <h1>Express Bikes</h1>
             <img className="img-card" src="https://images.unsplash.com/photo-1604384424869-3df702a9321e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="img-info-buness" />
             <div>
              <p>A mecânica perfeita para sua bike</p>
             </div>
             <a href="#">Veja mais</a> 
           </Card>

          </CardContainer>

          </Description>
        </GroupElementsPlace>
      </Container>
    </>  
  );
}