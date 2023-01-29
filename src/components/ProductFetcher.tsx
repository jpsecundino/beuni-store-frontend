import axios from 'axios';

class ProductFetcher {

    static getProducts(searchTerm: string){
        let response;

        response = axios.get("http://localhost:3001/products", { params: { name: searchTerm } })
    
        return response;
    }

}

export default ProductFetcher;
