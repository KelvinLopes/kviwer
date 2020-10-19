import styled from 'styled-components';

export const Dock = styled.aside`

    user-select: none;
    height: auto;
    width: 100vw;
    background: rgba(250, 250, 250, 0.9);
    border-radius: 0 0 0.8rem 0.8rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    top: 0;
    bottom: auto;

    margin-top: 0;
    position: fixed;
    z-index: 5;

    &:hover {
        height: 25vh;
        background: rgba(235, 242, 245, 0.9);

        .circle-icon {
            z-index: 5;
        }
    }

    .circle-icon {
        border-radius: 50%;
        transition: delay 2s;
    }

`;

export const GroupIcons = styled.ul`

        user-select: none;
        width: auto;
        height: auto;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

`;

export const Icons = styled.li`

    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 0;
    margin-bottom: 0.1rem;

    &:hover {
        .circle-icon {
            zoom: 170%;
            color: rgba(141, 144, 215, 0.5);

            /*-webkit-box-shadow: 5px 5px 5px 5px rgba(141, 144, 215, 0.9);
            -moz-box-shadow: 5px 5px 5px 5px rgba(141, 144, 215, 0.9);
            box-shadow: 5px 5px 5px 5px rgba(141, 144, 215, 0.9); */

            transition: delay 0.2s;
        }
    }

`;