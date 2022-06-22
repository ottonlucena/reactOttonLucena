import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from  './components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Contacto from './components/Contacto';
import MyProvider from './context/CartContext';

function App() {
  return (
    <>
    <BrowserRouter>
      <MyProvider>

        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/home' element={<ItemListContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer greeting={"!!"}/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/contacto' element={<Contacto />}/>
        </Routes>

      </MyProvider>
    </BrowserRouter>
    </>
    
  ); 
}


export default App;


