import React, {useState } from 'react';
import { MdInfo } from 'react-icons/md';
import { FaCircle } from 'react-icons/fa';

import { 
    Container, 
    Description,
    GroupElementsInfo, 
    GroupButtons,
    Button,
    OpenClose,
} 
    from './styles/styles';

    export default function Info()  {

       
        const [visible, setVisible] = useState(false);

        const imgInfo = "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";


        function handleToggleVisibleInfo( ) {
            setVisible(!visible);
        }

        return (
            <Container>
                <OpenClose onClick={handleToggleVisibleInfo}>
                    <MdInfo
                        className="circle-icon"
                        color="rgba(141, 144, 215, 1)"
                        size="5rem"
                        title="Info"
                        />
                    </OpenClose>
                <GroupElementsInfo visible={visible}>
                        <FaCircle
                            className="indicator-active-or-close"
                            size={30}
                            onClick={handleToggleVisibleInfo}
                            title='Fechar'
                        />

                    <GroupButtons>
                        <Button>Sobre</Button>
                        <Button>Feedback</Button>
                        <Button>Ajuda</Button>
                    </GroupButtons>

                    <img
                        src={imgInfo}
                        alt="Info img"
                    />

                    <Description>
                        <h2>Aurora</h2>
                        <p>Versão Alfa</p>
                        <p>Em desenvolvimento com ReactJS e outras tecnologias</p>
                    </Description>
                </GroupElementsInfo>
            </Container>

        );
    }