import {useEffect, useState} from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css"
import ProductFetcher from "./ProductFetcher";
import {useLocation} from "react-router-dom";
import LoadingPage from "./LoadingPage";

/**
 * Responsible to show a list of ProductCard for the user.
 */
function ProductList() {

    const notFoundMessage = 'Não encontramos nenhum produto com esse nome :(';

    const location = useLocation()
    let nameQuery = location.search.split('?name=')[1]

    let [loadingResponse, setLoadingResponse] = useState<boolean>(true);
    let [products, setProducts] = useState<any[]>([]);

    const getProductsByName = (name: string) => {
        setLoadingResponse(true);
        ProductFetcher.getProductsByName(name)
            .then(response => {
                setProducts(response.data);
                setLoadingResponse(false);
            });
    }

    useEffect(() => {
        getProductsByName(nameQuery);
    }, [nameQuery])

    function buildProductCards() {
        return products.map(p =>
            <ProductCard
                key={p['id']}
                productInfo={p}
            />
        )
    }

    function showNotFoundMessage() {
        return <h1>{notFoundMessage}</h1>
    }


    return (
        loadingResponse
            ? <LoadingPage text="Buscando itens"/>
            : <div className={styles.productsContainer}>
                {products.length === 0 ? showNotFoundMessage() : buildProductCards()}
            </div>
    )

}

export default ProductList;