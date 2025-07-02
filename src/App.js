
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultPage from './Pages/DefaultPage';
import ChatPage from './Pages/ChatPage';
import NotFoundPage from './Pages/NotFoundPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultPage/>}/>
        <Route path='/:id' element={<ChatPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );              
}

export default App;
