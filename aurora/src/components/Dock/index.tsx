import React from 'react';
import { Link } from 'react-router-dom';
import { Dock, GroupIcons, Icons } from './styles/styles';
import { MdSearch, MdHome, MdHeadsetMic, MdBook } from 'react-icons/md';


export default function DockBar() {

    return(
        <Dock>
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
                    <Link to="/">
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
                        />
                    </Link>
                </Icons>
            </GroupIcons>
        </Dock>

    );
}