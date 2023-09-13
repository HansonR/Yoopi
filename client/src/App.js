import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './screen/Home';
import { Routes, Route } from 'react-router-dom';
import { Login } from './screen/Login';
import { Register } from './screen/Register';

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/login' element={ <Login/>} />
        <Route path='/register' element={ <Register/>} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
