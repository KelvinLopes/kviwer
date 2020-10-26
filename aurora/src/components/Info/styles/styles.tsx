import styled from 'styled-components';

export const Container = styled.div`

    h2 {
        color: rgba(169,169,169, 1);
        font-weight: bold;
        font-size: 1rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;

        left: 0.8rem;
        margin: 2rem auto;
        text-align: center;
    }

    img {
        width: 10vw;
        height: auto;

        border-radius: 50%;
      
        border-radius: 1rem;
        margin: 1.5rem auto;
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .indicator-active-or-close {
        color: purple;

        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;

        position: relative;
        left: calc(50% - 19rem);
    }

    .indicator-active-or-close:hover {
        color: red;
    }

    position: relative;
    z-index: 6;
`;

export const GroupElementsInfo = styled.div`

    position: absolute;
    width: 40rem;
    left: calc(50% - 32rem);
    top: calc(100% + 0.8rem);
    margin-top: 50%;
    background: rgba(250, 250, 250, 0.9);
    border-radius: 0.8rem;
    padding: 15px 5px;
    display ${(props: { visible: boolean}) => (props.visible ? 'block' : 'none' ) };

    &:hover {
        background: rgba(5, 5, 5, 0.9);
        transition: delay 0.5s;
    }

`;

export const Description = styled.div`

    color: #fff;
    & + div {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid rgba(255, 255, 255, 0.13);

    p {
        font-size: 1rem;
        line-height: 18px;
        color: rgba(169,169,169, 0.9);

        width: 50%;
        text-align: center;
        margin: 0.9rem auto;
    }    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.9rem auto;

 &:hover {
     background: rgba(5, 5, 5, 0.9);
     transition: delay 0.2s;
 }
`;

export const OpenClose = styled.button`

    background: none;
    border: 0;
    position: relative;

`;

export const GroupButtons = styled.ul`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    position: relative;

`;

export const Button = styled.li`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    margin-left: 2rem;
    width: 10rem;
    height: 2rem;

    background: purple;
    color: rgba(169, 169, 169, 0.9);
    font-size: 1rem;

    border-radius: 0.5rem;

    &:hover {
        background: green;
        color: #f1f1f1;
    }

`;