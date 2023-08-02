import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop Container/Shop';
import Home from './Component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Review from './Component/Review/Review';
import Inventory from './Component/Inventory/Inventory';
import Login from './Component/Login/Login';
import Singup from './Component/Singup/Singup';
import Requreauth from './Component/Requreauth/Requreauth';
import Shipment from './Component/Shipment/Shipment';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/inventory' element={
          <Requreauth>
            <Inventory></Inventory>
          </Requreauth>
        }></Route>
        <Route path='/shipment' element={
          <Requreauth>
            <Shipment></Shipment>
          </Requreauth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<Singup></Singup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
