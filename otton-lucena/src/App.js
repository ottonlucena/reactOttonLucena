import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from  './components/NavBar';

function App() {
  const onAdd = (count) =>{
    return alert(`Se agregó ${count} productos al carrito correctamente.`)
  }
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"!!"}/>
      <ItemCount inicial={""} stock={5} onAdd={onAdd}/>
    </>
    
  ); 
}


export default App;


