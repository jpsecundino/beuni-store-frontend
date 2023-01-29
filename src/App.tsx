import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios, { AxiosResponse } from 'axios';
import ProductCard from './components/ProductCard';

function App() {

    let [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        console.log("Rodei.")
        try {
            axios.get("http://localhost:3001/products", {params: {name: "camis"}})
                .then(response => {setProducts(response.data); console.log(products)})
        }catch (e){
            console.log(e)
        }
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
            <button onClick={getProducts}>
                Clique aqui
            </button>
        </div>
    );
}

export default App;
