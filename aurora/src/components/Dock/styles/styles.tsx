import styled from 'styled-components';

export const Dock = styled.aside`

    user-select: none;
    height: auto;
    width: 100vw;
    background: rgba(250, 250, 250, 0.9);
    border-radius: 0 0 0.8rem 0.8rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: background-color 2s;

    top: 0;
    bottom: auto;

    margin-top: 0;
    position: fixed;
    z-index: 5;

    &:hover {
        height: 25vh;
        //background: rgba(235, 242, 245, 1);
        background: rgba(5, 5, 5, 0.9);
        transition: background-color 2s;
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

            transition: delay 0.2s;
        }
    }

`;

export const Input = styled.input`

    display: none;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.8rem;

    width: 50vw;
    height: 10vh;

    text-align: center;
    color: rgba(167, 167, 167, 1);
    font-weight: bold;
    font-size: 1rem;
    font-style: normal;
    outline: none;

    transition: background-color 0.2s;

    &:hover {
      border: 3px solid purple;
      background: rgba(5, 5, 5, 1);
      color: rgba(196, 161, 41, 1);
    }

    & ::before {
      content: ' ';
      position: absolute;
      left: calc(50% - 5.7rem);
      top: 20px;
      width: 50rem;
      height: auto;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 20px solid rgba(250, 250, 250, 1);
    }

    &::placeholder {
       color: rgba(169, 169, 169, 1);
       font-weight: bold;
       text-align: center;
       font-size: 1rem;
       font-style: italic;
    }

`