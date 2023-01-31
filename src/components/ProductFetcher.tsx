import axios from 'axios';

const BASE_URL: string = "http://localhost:4000";

class ProductFetcher {

    static getProductsByName(productName: string) {
        let response;

        response = axios.get(BASE_URL + "/products", { params: { name: productName } })
        console.log("called with " + productName);
        return response;    
    }

    static getProductById(id: string) {
        let response;

        response = axios.get(BASE_URL + "/product", { params: { id: id } })
    
        return response;
    }

}

export default ProductFetcher;
