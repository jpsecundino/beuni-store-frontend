import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios, { AxiosResponse } from 'axios';
import ProductCard from './components/ProductCard';
import ProductFetcher from './components/ProductFetcher';

function App() {

    let [products, setProducts] = useState([]);
    let [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        getProducts(searchTerm);
    }, []);

    const getProducts = (searchTerm:string) => {
        ProductFetcher.getProducts(searchTerm)
                      .then(response => setProducts(response.data))
    }
    return (
        <div className="App">
            {products.map(product =>
                <ProductCard
                    name={product['name']}
                    description={product['description']}
                    price={product['price']}
                    image={product['image']}
                    minimumQuantity={product['minimumQuantity']}
                ></ProductCard>
            )}
        </div>
    );
}

export default App;
