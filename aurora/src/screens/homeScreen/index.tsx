import React from 'react';
import Dock from '../../components/Dock';
import BoardScroll from '../../components/BoardScroll';
import ScreenShot from '../../assets/screenshots/AuroraOS_Print.png';
import Wallpaper from './wallpaper/styles';

import {
    Container,
    CardGroups,
    Card,
    HeaderCard,
    ImageCard,
    CardTitle
  } from '../stylesScreens/sytles'; 

import { FaCircle } from 'react-icons/fa';

export default function HomeScreen() {

    const imgOS = ScreenShot;

//Basta um toque no icone da dock ou do elemento para exibir ou ocultar os posts, func chamada na Container
    function handleOneTouchInDockToReadPost( ) {

        const readPost= document.querySelector('.read-post') as HTMLElement;


        if(readPost.style.display === 'none') {
            readPost.style.display = 'flex';
        }else {
            readPost.style.display = 'none';
        }
    }


    return (
        <>
          <Wallpaper />
            <Container onClick={handleOneTouchInDockToReadPost}>
                <Dock />
                <CardGroups className="read-post" > 
                <BoardScroll>
                    <Card className="hover-post">
                        <HeaderCard>
                            <CardTitle>
                            <FaCircle size={25} className="indicator-active-or-disable" /> 
                             Aurora OS
                            </CardTitle>
                        </HeaderCard>
                        <p>
                            <ImageCard className="img-description-zero-left" src={imgOS} alt="img print Aurora OS" />
                            Um sistema web da VirtuakeoBlog, super novidades, estão a caminho!
                            Um sistema web? Isso mesmo, porque pensar diferente vale a pena.
                            O projeto está um pouco lento em seu desenvolvimento, mas sigo confiante, em breve uma 
                            versão beta grátis será liberada.
                        </p>
                    </Card>
                    </BoardScroll>
                </CardGroups>
            </Container>
        </>
    );
}