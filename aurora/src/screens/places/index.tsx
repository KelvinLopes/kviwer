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

   
//Com um clique exibe e oculta informações é chamada no botão FaCircle
    function handleShowHidePlaces( ) {
      const readPost= document.querySelector('.places') as HTMLElement;
  
        if(readPost.style.display === 'none') {
            readPost.style.display = 'flex';
        }
        else {
            readPost.style.display = 'none';
        }
    }

  return (
  <>
      <Wallpaper />
      <Container onDoubleClick={handleonClickToogleSize}>
        <Dock />
        <GroupElementsPlace
          className="group-elements"
        >

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
              onClick={handleShowHidePlaces}
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