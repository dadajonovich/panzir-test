import { ReactNode, createContext, useState } from 'react';
import { NotificationProps } from '../Notification';

let notificationId = 0;

export const NotificationsContext = createContext<{
  notifications: NotificationProps[];
  remove: (id: number) => void;
  add: (props: Omit<NotificationProps, 'id'>) => void;
}>(null!);

export const NotificationsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  const remove = (id: number) => {
    setNotifications((notifications) => {
      return notifications.filter((notification) => notification.id !== id);
    });
  };

  const add = (props: Omit<NotificationProps, 'id'>) => {
    const { label, status, text } = props;

    setNotifications((notifications) => [
      ...notifications,
      {
        id: notificationId++,
        label,
        status,
        text,
      },
    ]);
  };

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        remove,
        add,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};
