import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from  './components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer';
//import Home from './components/Home';

function App() {
  return (
    <>
    <BrowserRouter>

      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/home' element={<ItemListContainer/>}/>
        <Route path='/category/:id' element={<ItemListContainer greeting={"!!"}/>}/>
        <Route path='/product/:id' element={<ItemDetailContainer />}/>
      </Routes>
    
    </BrowserRouter>
    </>
    
  ); 
}


export default App;


