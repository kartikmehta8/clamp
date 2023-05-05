import { useSelector } from 'react-redux';
import Notification from './components/NotificationBar/Notification';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  const isDarkModeEnabled = useSelector((state) => state.isDarkModeEnabled);

  return (
    <main>
      <div className={isDarkModeEnabled ? 'dark-mode' : 'light-mode'}>
        <Notification />
        <Header isDarkModeEnabled={isDarkModeEnabled} />
        <Main isDarkModeEnabled={isDarkModeEnabled} />
        <Footer />
      </div>
    </main>
  );
}

export default App;
