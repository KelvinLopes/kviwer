import React from 'react';
import Dock from '../../components/Dock';

import {
     BackgroundImg, 
     Container, 
     Header, 
     FirstImg, 
     GroupElements,
     HeaderToDescriptionToPage,
     DescriptionToPage, 
     ImgToDescription 
    } from '../stylesScreens/sytles'; 

import { FaCircle, FaArrowCircleDown } from 'react-icons/fa';

import wallpaper from '../../assets/wallpapers/Aurora_Boreal_wallpaper.jpg';

export default function HomeScreen() {

    const img = 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

    function handleReadPost( ) {

        const readPost= document.querySelector('.read-post') as HTMLElement;
        const hiddenShowPost = document.querySelector('.show-hidden-post') as HTMLElement;
        const messagePost = document.querySelector('.message-post') as HTMLElement;


        if(readPost.style.display === 'none') {
            readPost.style.display = 'flex';
            messagePost.style.display = 'flex';
        }else {
            readPost.style.display = 'none';
            messagePost.style.display = 'none';
        }

        if(hiddenShowPost.style.color === 'pink' ) {
            hiddenShowPost.style.color = 'green';
            messagePost.style.display = 'flex';
        }else {
            hiddenShowPost.style.color = 'pink';
            messagePost.style.display = 'none';
        }

        if(readPost.style.display === 'none') {
            hiddenShowPost.style.color = 'pink';
            messagePost.style.display = 'none';
        }else {
            hiddenShowPost.style.color = 'green';
            messagePost.style.display = 'flex';
        }
    }

    return (
        <>
            <Container>
                <Dock />
                <BackgroundImg src = {wallpaper} alt="wallpaper"  object-fit="cover"/>
                <Header>
                    <FaCircle 
                        className="show-hidden-post"
                        color="pink"
                        size={70}
                        title="Mostrar/ocultar posts"
                        onClick={handleReadPost}
                    />
                    <FirstImg src={img} alt="Aurora Boreal"/>
                    <FaArrowCircleDown className="message-post" size={40} />
                </Header>

                <GroupElements className="read-post" > 
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
                </GroupElements>

            </Container>

        </>
    );
}