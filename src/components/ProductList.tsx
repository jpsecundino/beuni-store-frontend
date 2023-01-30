import { useEffect } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css"
type ProductListProps = {
    productList: [],
};


function ProductList(props: ProductListProps) {

    const notFoundMessage = 'Não encontramos nenhum produto com esse nome :(';

    function buildProductCards() {
        return props.productList.map(product =>
            <ProductCard
                key={product['name']}
                name={product['name']}
                description={product['description']}
                price={product['price']}
                image={product['image']}
                minimumQuantity={product['minimumQuantity']}
            />
        )
    }

    function showNotFoundMessage() {
        return <h1>{notFoundMessage}</h1>
    }


    return (
        <div className='products-container'>
            { props.productList.length === 0 ? showNotFoundMessage() : buildProductCards()}
        </div>
   ) 

}

export default ProductList;