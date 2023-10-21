import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductsScreen from './screens /ProductsScreen';
import LogIn from './screens /LogIn';
import SignUp from './screens /SignUp';
import Navbar from './components/Navbar';
import Cart from './screens /Cart';
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<ProductsScreen />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />  
         <Route path="/cart" element={<Cart />} />  
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;

