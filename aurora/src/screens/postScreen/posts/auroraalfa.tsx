import React from 'react';
import Dock from '../../../components/Dock';
import BoardScroll from '../../../components/BoardScroll';
import Wallpaper from '../wallpaper/styles';

import {
  Container,
  GroupElements,
  HeaderToDescriptionToPage,
  DescriptionToPage,
  ImgToDescription
} from '../posts/stylesPosts/sytles';

import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function PostScreen() {

  const img = 'https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80';
  const imgTwo = 'https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80';

//Basta um toques ou um clique no icone da dock ou do elemento  para exibir ou ocultar os posts, func chamada na Container
  function handleOneTouchInDockToReadPost() {

    const readPost = document.querySelector('.read-post') as HTMLElement;

    if (readPost.style.display === 'none') {
      readPost.style.display = 'flex';
    } else {
      readPost.style.display = 'none';
    }
  }

//Basta um toque ou um clique para aumentar em 100vw ou reduzir para 60vw os cards, fun chamada no DescriptionToPage
  function handleOnDoubleToogleSize () {
    const toogleSize = document.querySelector('.hover-post') as HTMLElement;
  
    if (toogleSize.style.width == '60vw') {
      toogleSize.style.width ='100vw';
    } else {
      toogleSize.style.width = '60vw';
    }
  }

  return (
    <>
      <Wallpaper />
      <Container onClick={handleOneTouchInDockToReadPost} >
        <Dock />
        <GroupElements className="read-post" >
          <BoardScroll className="board-scroll">
            <DescriptionToPage className="hover-post" onDoubleClick={handleOnDoubleToogleSize}>
              <HeaderToDescriptionToPage >
              <h1> 
                  <Link to="/posts">
                    <FaArrowAltCircleLeft size={30}
                    className="back_arrow_left" 
                    />
                  </Link> 
                  Aurora Alpha Version
                </h1>
              </HeaderToDescriptionToPage>
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
                  Prepare se para ver algo sensacional aqui!
                  🤍
                </p>
            </DescriptionToPage>
          </BoardScroll>
        </GroupElements>
      </Container>
    </>
  );
}