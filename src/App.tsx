import { useEffect, useState } from 'react';
import { Notification, NotificationProps } from './components/Notification';
import { simulateServer } from './utils/simulateServer';

function App() {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        await simulateServer();
        setNotifications((notifications) => [
          ...notifications,
          {
            label: 'Успешно',
            status: 'succes',
            text: 'Изменения успешно сохранены',
          },
        ]);
      } catch (error) {
        setNotifications((notifications) => [
          ...notifications,
          {
            label: 'Изменения не сохранены',
            status: 'error',
            text: 'Потеря интернет соединения',
          },
        ]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="m-7	flex	flex-col gap-7 rounded border border-dashed border-border-purple p-5">
      {notifications.map((notification, index) => (
        <Notification {...notification} key={index} />
      ))}
    </main>
  );
}

export default App;
