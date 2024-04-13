import { useEffect, useState } from 'react';

export type NotificationProps = {
  label: string;
  status: 'succes' | 'error';
  text: string;
};

export function Notification(props: NotificationProps) {
  const { label, status, text } = props;
  const [value, setValue] = useState<number>(100);
  const [mouseAbove, setMouseAbove] = useState<boolean>(false);

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

  if (value < 0) return null;

  return (
    <div
      className="flex"
      onMouseEnter={handlerMouseEnter}
      onMouseLeave={handlerMouseLeave}
    >
      <div>
        <img
          src={status === 'succes' ? 'fulfilled.svg' : 'rejected.svg'}
          alt="status"
        />
      </div>
      <div>
        <h2>{label}</h2>
        <p>{text}</p>
        <progress className="progress" value={value} max="100"></progress>
      </div>
    </div>
  );
}
