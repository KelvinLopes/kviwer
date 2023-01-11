import React from 'react';
import Dock from '../../../components/Dock';
import BoardScroll from '../../../components/BoardScroll';
import Wallpaper from '../wallpaper/styles';
import { MdPlace } from 'react-icons/md';

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

const imgFoul = 'https://cdn.pixabay.com/photo/2018/01/31/05/43/web-3120321_1280.png';

//Basta dois toques ou dois cliques para exibir ou ocultar os posts, func chamada na Container
  function handleDoubleTouchInDockToReadPost() {

    const readPost = document.querySelector('.read-post') as HTMLElement;

    if (readPost.style.display === 'none') {
      readPost.style.display = 'flex';
    } else {
      readPost.style.display = 'none';
    }
  }

  //Basta um toque ou um clique para aumentar em 100vw ou reduzir para 60vw os cards, fun chamada no DescriptionToPage
  function handleonClickToogleSize () {
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
      <Container onDoubleClick={handleDoubleTouchInDockToReadPost} >
        <Dock />
        <GroupElements className="read-post" >
          <BoardScroll className="board-scroll">
            <DescriptionToPage className="hover-post" onClick={handleonClickToogleSize}>
              <HeaderToDescriptionToPage>
                <h1> 
                  <Link to="/posts">
                    <FaArrowAltCircleLeft size={30}
                    className="back_arrow_left" 
                    />
                  </Link> 
                  Aurora Places
                </h1>
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
            <span></span>
          </BoardScroll>
        </GroupElements>
      </Container>
    </>
  );
}