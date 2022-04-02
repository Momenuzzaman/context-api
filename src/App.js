import { createContext, useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Shipment from './Component/Shipment/Shipment';

export const CategoryContext = createContext();

function App() {
  const [count,setCount]=useState(0);
  return (
    <CategoryContext.Provider value={[count,setCount]}>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
