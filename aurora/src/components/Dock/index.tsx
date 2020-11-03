import React from 'react';
import { Link } from 'react-router-dom';
import { Dock, GroupIcons, Icons, Input } from './styles/styles';
import { MdSearch, MdHome, MdHeadsetMic, MdBook, MdInfo } from 'react-icons/md';
import Notifications from './../Notifications';


export default function DockBar() {

    function ShowHidennInput() {
     const input = document.querySelector('.input') as HTMLElement;


        if(input.style.display === 'none') {
            input.style.display = 'flex';
        }else {
            input.style.display = 'none';
        }
    } 

    return(
        <Dock className="dock">
            <GroupIcons>
                <Icons>
                    <Link to="/">
                        <MdHome 
                            className="circle-icon"
                            color="rgba(141, 144, 215, 1)"
                            size="5rem"
                            title="Home"
                        />
                    </Link>
                </Icons>

                 <Icons>
                    <Link to="/posts">
                        <MdBook 
                            className="circle-icon"
                            color="rgba(141, 144, 215, 1)"
                            size="5rem"
                            title="Posts"
                        />
                    </Link>
                </Icons>

                 <Icons>
                    <Link to="/">
                        <MdHeadsetMic 
                            className="circle-icon"
                            color="rgba(141, 144, 215, 1)"
                            size="5rem"
                            title="Podcast"
                        />
                    </Link>
                </Icons>

                 <Icons>
                    <Link to="/">
                        <MdSearch 
                            className="circle-icon"
                            color="rgba(141, 144, 215, 1)"
                            size="5rem"
                            title="Home"
                            onClick={ShowHidennInput}
                        />
                    </Link>
                </Icons>

                <Icons>
                     <Link to="/info">
                        <MdInfo
                            className="circle-icon"
                            color="rgba(141, 144, 215, 1)"
                            size="5rem"
                            title="Home"
                            onClick={ShowHidennInput}
                        />
                        </Link>
                </Icons>

                <Icons>
                    <Notifications />
                </Icons>
            </GroupIcons>

            <Input placeholder="Faça sua busca" className="input"/>
        </Dock>

    );
}