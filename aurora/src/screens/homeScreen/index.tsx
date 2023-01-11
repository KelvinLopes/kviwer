import React from 'react';
import Dock from '../../components/Dock';
import BoardScroll from '../../components/BoardScroll';
import Wallpaper from './wallpaper/styles';

import {
    Container,
    CardGroups,
    Card,
    HeaderCard,
    ImageCard,
    CardTitle
  } from '../stylesScreens/sytles'; 

import { FaCircle, FaArrowCircleDown } from 'react-icons/fa';

export default function HomeScreen() {

    const img = 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

    function handleDoubleTouchInDockToReadPost( ) {

        const readPost= document.querySelector('.read-post') as HTMLElement;


        if(readPost.style.display === 'none') {
            readPost.style.display = 'flex';
        }else {
            readPost.style.display = 'none';
        }
    }

    //Basta um toque ou um clique para aumentar em 100vw ou reduzir para 60vw os cards, fun chamada no Card
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
                <CardGroups className="read-post" > 
                <BoardScroll>
                    <Card className="hover-post" onClick={handleonClickToogleSize}>
                        <HeaderCard>
                            <CardTitle>
                            <FaCircle size={25} className="indicator-active-or-disable" /> 
                             Aurora OS
                            </CardTitle>
                        </HeaderCard>
                        <p>
                            <ImageCard className="img-description-zero-left" src={img} alt="img Fenonemo Aurora Boreal" />
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