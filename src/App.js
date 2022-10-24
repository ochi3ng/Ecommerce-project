
import './NavBar.css';
import './Components/AboutUs.css';
import './Components/DataFetching.css'
import './Components/Footer.css'
import './Components/HomePage.css'
import './Components/Services.css'
import DataFetching from './Components/DataFetching';
import { Routes,Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import AboutUs from './Components/AboutUs';
import ProductsDetails from './Components/ProductsDetails';
import HomePage from './Components/HomePage';
import Services from './Components/Services';

function App() {
  return (
<div>
  <NavBar />
<Routes>
  <Route path="/home" element={<HomePage/>}/>
  <Route path="/prod" element={<DataFetching/>}/>
  <Route path="/about" element={<AboutUs/>}/>
  <Route path="/serv" element={<Services/>}/>
  <Route path="/details/:id" element={<ProductsDetails/>}/>
</Routes>
</div>
  );
}

export default App;
