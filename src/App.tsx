import {useState} from 'react';
import './App.css';
import ProductFetcher from './components/ProductFetcher';
import ProductList from './components/ProductList';
import TopBar from './components/TopBar';
import ProductPage from './components/ProductPage';
import LandingPage from './components/LandingPage';
import LoadingPage from './components/LoadingPage';

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

function App() {

    let [products, setProducts] = useState<[]>([]);

    return (
        <div className="App">
            <BrowserRouter>
            <TopBar />
            <div className='page-content'>
                    <Routes> 
                    <Route path='/' element={<LandingPage/>}></Route>
                    <Route path='/search' element={<ProductList />} />
                    <Route path='/product' element={<ProductPage/>} />
                    </Routes>
            </div>
            </BrowserRouter>          

        </div>
    );
}

export default App;
