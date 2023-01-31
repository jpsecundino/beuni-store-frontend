import axios, { AxiosResponse } from 'axios';

class ProductFetcher {

    static getProductsByName(productName: string) {
        let response;

        response = axios.get("http://localhost:3001/products", { params: { name: productName } })
    
        return response;
    }

    static getProductById(id: string) {
        let response;

        response = axios.get("http://localhost:3001/product", { params: { id: id } })
    
        return response;
    }

}

export default ProductFetcher;
