import React from 'react';
import Dock from '../../components/Dock';
import BoardScroll from '../../components/BoardScroll';
import Wallpaper from './wallpaper/styles';
import { MdPlace } from 'react-icons/md';


import {
  Container,
  CardGroups,
  Card,
  HeaderCard,
  ImageCard,
  CardTitle
} from '../stylesScreens/sytles';

import { FaCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function PostScreen() {

  const img = 'https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80';
  const imgFoul = 'https://cdn.pixabay.com/photo/2018/01/31/05/43/web-3120321_1280.png';


//Basta um toque no icone da dock ou do elemento para exibir ou ocultar os posts, func chamada na Container
  function handleOneTouchInDockToReadPost() {

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
      <Container onClick={handleOneTouchInDockToReadPost} >
        <Dock />
        <CardGroups className="read-post" >
          <BoardScroll className="board-scroll">
            <Card className="hover-post">
              <HeaderCard>
                <CardTitle>
                  <FaCircle size={25} className="indicator-active-or-disable" />
                  <Link className="clicked" to="/aurora_places" >Aurora Places</Link>
                </CardTitle>
              </HeaderCard>
                <MdPlace
                  className="circle-icon"
                  color="rgba(141, 144, 215, 1)"
                  size="7rem"
                  title="Places"
                />
              <p>
                <ImageCard className="img-description-zero-left" src={imgFoul} alt="Dev Aurora" />
                Novidades chegando: conheça o Aurora Places.
              </p>
            </Card>
              
          {/* Haverá atualização e novos styles componentes Card com map*/}

            <Card className="hover-post">
              <HeaderCard>
                <CardTitle>
                  <FaCircle size={25} className="indicator-active-or-disable" />
                  <Link to="/aurora_alfa_version">Aurora Alfa version</Link>
                </CardTitle>
              </HeaderCard>
                <p>
                  <ImageCard className="img-description-zero-left" src={img} alt="Dev Aurora" />
                  O ínicio de tudo, no Aurora OS, sistema próprio para meu projeto, meu blog VirtuakeoBlog.
                  Nossa casa de serviços digitais, entertenimento do Brasil, muitas novidades estão para chegar.
                  Leia mais clicando no título desse card.
                </p>
            </Card>
          </BoardScroll>
        </CardGroups>
      </Container>
    </>
  );
}