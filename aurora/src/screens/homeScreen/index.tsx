import React from 'react';
import Dock from '../../components/Dock';
import BoardScroll from '../../components/BoardScroll';
import Wallpaper from './wallpaper/styles';

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

    return (
        <>
          <Wallpaper />
            <Container onDoubleClick={handleDoubleTouchInDockToReadPost} >
                <Dock />
                <GroupElements className="read-post" > 
                <BoardScroll>
                    <DescriptionToPage className="hover-post">
                        <HeaderToDescriptionToPage>
                            <h1> <FaCircle size={25} className="indicator-active-or-disable" /> Aurora</h1>
                        </HeaderToDescriptionToPage>
                        <p>
                            <ImgToDescription className="img-description-zero-left" src={img} alt="img Fenonemo Aurora Boreal" />
                            Trabalhando em um projeto incrivel que visa uma interface, moderna,
                            limpa, bonita e inteligente.
                            O nome Aurora, não é atoa, é bonito de se ver esse fenômeno.
                        </p>
                        <p>
                            Prepare se para ver algo incrivél!
                            🤍
                        </p>
                    </DescriptionToPage>
                    </BoardScroll>
                </GroupElements>

            </Container>

        </>
    );
}