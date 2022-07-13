import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Contacto from "./components/Contacto";
import MyProvider from "./context/CartContext";
import { initializeApp } from "firebase/app";
import ContactoForm from "./components/ContactoForm";
import NavBar2 from "./components/NavBar2";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCAoCLMPzehYTYdoMdPpKvRfs39NOrDsLQ",
    authDomain: "inventario-eee78.firebaseapp.com",
    projectId: "inventario-eee78",
    storageBucket: "inventario-eee78.appspot.com",
    messagingSenderId: "103454120528",
    appId: "1:103454120528:web:9f063395a7990ee965cf55",
  };
  initializeApp(firebaseConfig);

  return (
    <>
      <BrowserRouter>
        <MyProvider>
          <NavBar2 />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/home"
              element={<ItemListContainer greeting={"!!"} />}
            />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/formulario" element={<ContactoForm />} />
          </Routes>
        </MyProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
