import {useEffect, useState} from 'react';
import './App.css';
import ProductFetcher from './components/ProductFetcher';
import ProductList from './components/ProductList';
import TopBar from './components/TopBar';

function App() {

    let [products, setProducts] = useState<[]>([]);

    const getProducts = (query: string) => {
        if (query.length === 0) {
            return;
        }

        ProductFetcher.getProducts(query)
            .then(response => setProducts(response.data));
    }

    return (
        <div className="App">
            <TopBar onQuery={getProducts} />
            <div className='page-content'>
                <ProductList productList={products} />               
            </div>
        </div>
    );
}

export default App;
