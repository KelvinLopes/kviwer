import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { lighten } from 'polished';


export const Container = styled.div`

    h2 {
        color: rgba(169,169,169, 1);
        font-weight: bold;
        font-size: 1rem;

        display: flex;
        flex-direction: row;
        justify-content: center;
        position: relative;

        left: 0.8rem;
        top: 1rem;
    }

    img {
        width: 28vw;
        height: 60vh;
        object-fit: cover;
        border-radius: 1rem;
        margin: 1.5rem auto;
        position: relative;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .indicator-active-or-close {
        color: purple;

        display: flex;
        flex-direction: row;
        justify-content: center;

        position: relative;
        left: calc(50% - 14rem);
    }

    .indicator-active-or-close:hover {
        color: red;
    }

    position: relative;

`;

export const Badge = styled.button`

    background: none;
    border: 0;
    position: relative;
    outline: none;

    ${(props: { hasUnread: boolean }) =>
		props.hasUnread &&
		css`
            &::after {
                position: absolute;
                right: 0;
                top: 0;
                width: 8px;
                height: 8px;
                background: #ff892e;
                content: '';
                border-radius: 50%;
        }
    `}    
    
`;

export const NotificationsList = styled.div`

    position: absolute;
    width: 25rem;
    height: 70vh;
    left: calc(50% - 130px);
    top: calc(100% + 20px);
    background: rgba(250, 250, 250, 0.9);
    border-radius: 0.8rem;
    display:  ${(props: { visible: boolean }) => (props.visible ? 'block' : 'none')};

    &::before {
        content: '';
        position: absolute;
        left: calc(50% - 5.7rem);
        top: -20px;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 20px solid rgba(250, 250, 250, 1);
    }
`;

export const Scroll = styled(PerfectScrollbar)`

    max-height: 260px;
    padding: 5px 15px;

`;

export const Notification = styled.div`

    color: #fff;
    & + div {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid rgba(255, 255, 255, 0.13);

    p {
        font-size: 13px;
        line-height: 18px;
    }    

    time {
        font-size: 12px;
        opacity: 0.6;
        display: block;
        margin-bottom: 5px;
    }

    button {
        font-size: 12px;
        border: 0;
        background: none;
        color: ${lighten(0.2, 'purple')};
    }

    ${(props: { unread: boolean }) =>
		props.unread &&
		css`
            &::after {
                content: '';
                display: inline-block;
                width: 8px;
                height: 8px;
                background: #ff892e;
                border-radius: 50%;
                margin-left: 10px;
            }
        `}
	}
`;
