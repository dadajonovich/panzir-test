import { useEffect, useState, useContext } from 'react';
import { NotificationsContext } from '../Notifications/context';

export type NotificationProps = {
  id: number;
  label: string;
  status: 'succes' | 'error';
  text: string;
};

export function Notification(props: NotificationProps) {
  const { id, label, status, text } = props;
  const [value, setValue] = useState<number>(100);
  const [mouseAbove, setMouseAbove] = useState<boolean>(false);
  const { remove } = useContext(NotificationsContext);

  const handlerMouseEnter = () => {
    setMouseAbove(true);
  };

  const handlerMouseLeave = () => {
    setMouseAbove(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (mouseAbove) return;
      setValue((value) => value - 10);
    }, 300);

    return () => clearInterval(interval);
  }, [mouseAbove]);

  if (value < 0) {
    remove(id);
    return null;
  }

  return (
    <div
      className="notification flex gap-3 p-6"
      onMouseEnter={handlerMouseEnter}
      onMouseLeave={handlerMouseLeave}
    >
      <div>
        <img
          src={status === 'succes' ? 'fulfilled.svg' : 'rejected.svg'}
          alt="status"
        />
      </div>
      <div className="w-full">
        <h2 className="text-base font-medium">{label}</h2>
        <p className="text-xs font-light text-text-color">{text}</p>
        <progress className="progress" value={value} max="100"></progress>
      </div>
    </div>
  );
}
