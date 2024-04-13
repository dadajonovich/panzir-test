import { useContext, useEffect } from 'react';
import { simulateServer } from '../../utils/simulateServer';
import { NotificationsContext } from './context';
import { Notification } from '../Notification';

export const Notifications = () => {
  const { add, notifications } = useContext(NotificationsContext);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        await simulateServer();
        add({
          label: 'Успешно',
          status: 'succes',
          text: 'Изменения успешно сохранены',
        });
      } catch (error) {
        add({
          label: 'Изменения не сохранены',
          status: 'error',
          text: 'Потеря интернет соединения',
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="m-7	flex	flex-col gap-7 rounded border border-dashed border-border-purple p-5">
      {notifications.map((notification) => (
        <Notification {...notification} key={notification.id} />
      ))}
    </div>
  );
};
