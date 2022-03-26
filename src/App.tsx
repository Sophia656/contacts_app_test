import ContactsPage from './pages/ContactsPage/ContactsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import React from 'react';
import { useLocalStorage } from './components/hooks/useLocalStorage';
const styles = require('./assets/index.css')

function App() {
const [resultId, setIdResult] = useLocalStorage('resultId','false');

console.log(resultId)

  return (
    <div>
        {resultId ? <ContactsPage resultId={resultId} setIdResult={setIdResult} /> : <LoginPage resultId={resultId} setIdResult={setIdResult} />}
    </div>
  );
}

export default App;