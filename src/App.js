
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
 import Product from './Pages/Product';
 import Categories from './Pages/Categories'
import Detailpage from './Components/Detailpage';
import Beauty from './Components/Beauty';
import Fragrances from './Components/Fragrances';
import Furniture from './Components/Furniture';
import Groceries from './Components/Groceries';
import Main from './Pages/Main';
import Cartpage from './Pages/Cartpage';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Product' element={<Product/>}/>
     <Route path='/detailpage/:category/:id' element={<Detailpage/>}/>
     <Route path='/Categories' element={<Categories/>}/>
     <Route path='/Beauty' element={<Beauty/>}/>
     <Route path='/Fragrances' element={<Fragrances/>}/>
     <Route path='/Furniture' element={<Furniture/>}/>
     <Route path='/Groceries' element={<Groceries/>}/>
     <Route path='/Main' element={<Main/>}/>
     <Route path='/Cartpage' element={<Cartpage/>}/>












    </Routes>
    </BrowserRouter>
    
    

  
  );
}

export default App;
