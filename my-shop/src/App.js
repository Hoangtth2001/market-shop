// import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contact, Home, Login, Register, Reset } from './pages';
import { Footer, Header } from './components';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset' element={<Reset />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
