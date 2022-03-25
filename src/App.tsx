import ContactsPage from './pages/ContactsPage/ContactsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import { useAppSelector } from './redux/hooks';
import React from 'react';
// import * as styles from './assets/index.css';
const styles = require('./assets/index.css')

function App() {
// localStorage.clear()
  const {isAuth} = useAppSelector(state => state.loginReducer)
  localStorage.setItem('auth', String(isAuth))

  return (
    <div>
        {isAuth ? <ContactsPage /> : <LoginPage />}
    </div>
  );
}

export default App;