import {useState} from 'react';
import './App.css';
import ProductFetcher from './components/ProductFetcher';
import ProductList from './components/ProductList';
import TopBar from './components/TopBar';

function App() {

    let [products, setProducts] = useState<[]>([]);

    const getProducts = (query:string) => {
        ProductFetcher.getProducts(query)
            .then(response => setProducts(response.data));
    }

    return (
        <div className="App">

            <TopBar onQuery={getProducts}/>
        
            <ProductList productList={products} />
            


        </div>
    );
}

export default App;
