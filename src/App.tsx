import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import TextField from '@mui/material/TextField';
import './App.css';
import ProductCard from './components/ProductCard';
import ProductFetcher from './components/ProductFetcher';
import ProductList from './components/ProductList';

function App() {

    let [products, setProducts] = useState<[]>([]);
    let [searchTerm, setSearchTerm] = useState('')

    const getProducts = (searchTerm:string) => {
        ProductFetcher.getProducts(searchTerm)
            .then(response => setProducts(response.data));
    }

    return (
        <div className="App">
            <form onSubmit={(event) => event.preventDefault()}>
            <label>
                Product name:
                    <input type="text" name="name" value={searchTerm} onChange={(event) => { setSearchTerm(event.target.value); console.log(searchTerm)}} />
                </label>
                <input type="submit" value="Submit" onClick={() => getProducts(searchTerm)} />
            </form>
            
            <ProductList productList={products}/> 

        </div>
    );
}

export default App;
