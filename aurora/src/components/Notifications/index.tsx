import React, {useState, useMemo} from 'react';
import { MdNotifications } from 'react-icons/md';
import { FaCircle } from 'react-icons/fa';

import { 
    Container, 
    Badge, 
    NotificationsList, 
    Scroll, 
    Notification} 
    from './styles/styles';


    interface App {
        read?: boolean; 
        _id: number;
        content: string;
    }

    export default function Notifications()  {

        const imgNotification = "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=358&q=80";

        const [visible, setVisible] = useState(false);
        const [notifications, setNotifications] = useState<App[]>([]);

        const hasUnread = useMemo(
            () => !!notifications.find((notification: App) => notification.read === false),
            [notifications]
        );

        function handleToggleVisibleNotifications( ) {
            setVisible(!visible);
        }

        return (
            <Container>
                <Badge  onClick={ handleToggleVisibleNotifications } hasUnread = {hasUnread} >
                    <MdNotifications 
                        className="circle-icon"
                        color="rgba(141, 144, 215, 1)"
                        size="5rem"
                        title="Notificações"
                        />
                </Badge>
                <NotificationsList visible={visible}>
                    <h2>
                        <FaCircle
                            className="indicator-active-or-close"
                            size={20}
                            onClick={handleToggleVisibleNotifications}
                            title='Fechar'
                        />
                        Suas notificações apareceram aqui!
                    </h2>

                        <img src={imgNotification} alt="img-teste" />

                        <Scroll>
                            {/*Mapping Notifications*/}
                            { notifications.map((notification) => (
                                    <Notification key={notification._id} unread={!notification.read}>
                                        <p>{notification.content}</p>
                                        {!notification.read && (
                                            <button
                                                type="button"
                                                onClick={() => {}}
                                            >
                                                Marcar como lida
                                            </button>
                                        )}
                                     </Notification>
                                ))
                            }
                        </Scroll>

                </NotificationsList>
            </Container>

        );
    }