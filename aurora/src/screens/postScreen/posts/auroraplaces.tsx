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

import { FaCircle } from 'react-icons/fa';

export default function PostScreen() {

const imgFoul = 'https://cdn.pixabay.com/photo/2018/01/31/05/43/web-3120321_1280.png';

  function handleDoubleTouchInDockToReadPost() {

    const readPost = document.querySelector('.read-post') as HTMLElement;

    if (readPost.style.display === 'none') {
      readPost.style.display = 'flex';
    } else {
      readPost.style.display = 'none';
    }
  }
  return (
    <>
      <Wallpaper />
      <Container onDoubleClick={handleDoubleTouchInDockToReadPost} >
        <Dock />
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
            <span></span>
          </BoardScroll>
        </GroupElements>
      </Container>
    </>
  );
}