import { Route, Routes } from 'react-router-dom';
import HomePage from './static/HomePage';
import ChatPage from './static/ChatPage';

import './App.sass';
import RegisterPage from './static/RegisterPage';
import LoginPage from './static/LoginPage';
import NavBar from './shared/NavBar';
import { useContext } from 'react';
import { AuthContext } from './core/context/AuthContext';
import { ChatContextProvider } from './core/context/ChatContext';

function App() {

  const {user} = useContext(AuthContext);

  return (
    <ChatContextProvider user={user}>
      <NavBar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={user ? <ChatPage/> : <HomePage />}></Route>
          <Route path="/chat" element={user ? <ChatPage/> : <LoginPage/>}></Route>
          <Route path="/register" element={user ? <ChatPage/> : <RegisterPage/>}></Route>
          <Route path="/login" element={user ? <ChatPage/> : <LoginPage/>}></Route>
        </Routes>
      </div>
    </ChatContextProvider>
     
  );
}

export default App;
