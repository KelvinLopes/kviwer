import React from 'react';
import Dock from '../../components/Dock';
import BoardScroll from '../../components/BoardScroll';
import Wallpaper from './wallpaper/styles';
import { MdPlace } from 'react-icons/md';

import {
  Container,
  GroupElements,
  HeaderToDescriptionToPage,
  DescriptionToPage,
  ImgToDescription,
  Header,
  FirstImg
} from '../stylesScreens/sytles';

import { FaCircle, FaArrowCircleDown } from 'react-icons/fa';

export default function PostScreen() {

  const img = 'https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80';
  const imgTwo = 'https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80';
  const imgThree = 'https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80';
  const imgFoul = 'https://cdn.pixabay.com/photo/2018/01/31/05/43/web-3120321_1280.png';

  function handleReadPost() {

    const readPost = document.querySelector('.read-post') as HTMLElement;
    const hiddenShowPost = document.querySelector('.show-hidden-post') as HTMLElement;
    const messagePost = document.querySelector('.message-post') as HTMLElement;


    if (readPost.style.display === 'none') {
      readPost.style.display = 'flex';
      // messagePost.style.display = 'flex';
    } else {
      readPost.style.display = 'none';
      //messagePost.style.display = 'none';
    }


  }

  return (
    <>
      <Wallpaper />

      <Container onDoubleClick={handleReadPost} >
        <Dock />
        <Header>
                    <FaCircle 
                        className="show-hidden-post"
                        color="pink"
                        size={70}
                        title="Mostrar/ocultar posts"
                        onDoubleClick={handleReadPost}
                    />
                    <FirstImg src={imgThree} alt="Aurora Boreal"/>
                    <FaArrowCircleDown className="message-post" size={40} />
                </Header>

        <GroupElements className="read-post" >
          <BoardScroll className="board-scroll">
             

            <DescriptionToPage className="hover-post">
              <HeaderToDescriptionToPage>
                <h1> <FaCircle size={25} className="indicator-active-or-disable" /> Aurora Places</h1>
              </HeaderToDescriptionToPage>
                <MdPlace
                  className="circle-icon"
                  color="rgba(141, 144, 215, 1)"
                  size="7rem"
                  title="Places"
                />


                <p>
                  Iniciando o desenvolvimento do Aurora Places, um serviço onde pessoas ou empresas poderão
                  encontrar negócios e prestadores de serviços de uma forma bem prática.
                          <ImgToDescription className="img-description-zero-left" src={imgFoul} alt="Dev Aurora" />
                </p>

                <p>
                  Em breve novas funcionalidades e mais detalhes do web app Aurora Places.
                </p>
        

            </DescriptionToPage>
              


            <DescriptionToPage className="hover-post">

              <HeaderToDescriptionToPage>
                <h1> <FaCircle size={25} className="indicator-active-or-disable" /> Aurora Alfa version</h1>
              </HeaderToDescriptionToPage>

                <p>
                  <ImgToDescription className="img-description-zero-left" src={img} alt="Dev Aurora" />
                           Seja na web ou não, acredito que sites e sistemas podem e devem sempre inovar e evoluir em outros
                           pontos além dos tradicionais que vejo ultimamente.
                           Pensando nisso comecei a trabalhar nessa interface e quem sabe extende lá além da web.
                </p>

                <p>
                  <ImgToDescription className="img-description-zero-left" src={img} alt="Dev Aurora" />
                           Seja na web ou não, acredito que sites e sistemas podem e devem sempre inovar e evoluir em outros
                           pontos além dos tradicionais que vejo ultimamente.
                           Pensando nisso comecei a trabalhar nessa interface e quem sabe extende lá além da web.
                </p>
                
                <p>
                  <ImgToDescription className="img-description-zero-left" src={imgTwo} alt="Dev Aurora" />
                            Trazer recursos interessantes é uma missão e tanto, mas quero fazer isso e continuar a crescer os
                            planos. Tudo está muito novo e pequeno ainda, mas tenho certeza que se tornará em algo incrivél!
                            Prepare se para ver algo incrivél aqui!
                            🤍
                </p>

            </DescriptionToPage>
            <span></span>
           

          </BoardScroll>

        </GroupElements>


      </Container>

    </>
  );
}