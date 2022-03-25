import ContactsPage from './pages/ContactsPage/ContactsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import { useAppSelector } from './redux/hooks';
import './styles/styles.scss'
import React from 'react';

function App() {
// localStorage.clear()
  const {isAuth} = useAppSelector(state => state.loginReducer)
  localStorage.setItem('auth', String(isAuth))

  return (
    <div className='App'>
        {isAuth ? <ContactsPage /> : <LoginPage />}
    </div>
  );
}

export default App;