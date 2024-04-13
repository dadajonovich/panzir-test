import { NotificationsProvider } from './components/Notifications/context';
import { Notifications } from './components/Notifications';

function App() {
  return (
    <NotificationsProvider>
      <main>
        <Notifications />
      </main>
    </NotificationsProvider>
  );
}

export default App;
