import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './login';
import Register from './register';
import Home from './Home';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored'></ToastContainer>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
