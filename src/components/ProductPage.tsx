import {useState, useEffect} from 'react';
import Rating from '@mui/material/Rating';
import {Icon, Button} from "semantic-ui-react";
import ProductFetcher from "./ProductFetcher";
import {useLocation} from 'react-router-dom';
import styles from "./ProductPage.module.css"
import LoadingPage from './LoadingPage';


/**
 * Shows information about a specific product.
 */
function ProductPage() {

    const location = useLocation()
    let productId = location.search.split('?id=')[1]

    let [product, setProduct] = useState<any>({});
    let [loadingResponse, setLoadingResponse] = useState<boolean>(true);

    const getProductById = (id: string) => {
        setLoadingResponse(true);
        ProductFetcher.getProductById(id)
            .then(response => {
                setProduct(response.data[0]);
                setLoadingResponse(false);
            });
    }

    useEffect(() => {
        getProductById(productId);
    }, [])

    return (
        loadingResponse ?
            <LoadingPage text='Carregando produto'/>
            :
            product !== undefined ?
                <div className={styles.productPage}>
                    <div className={styles.leftSide}>
                        <img className={styles.image} src={product.image[0].url}></img>
                    </div>
                    <div className={styles.rightSide}>
                        <div className={styles.title}>
                            <h1>{product.name}</h1>
                        </div>
                        <div className={styles.productInfo}>

                            <div className={styles.rating}>
                                <Rating size='large' name="read-only" value={parseFloat(product.rating)} readOnly />
                                ({parseFloat(product.rating)})
                            </div>

                            <p>
                                {product.hasFreeShipping === "true" ? "Frete grátis!" : 'Não possui frete grátis'}
                            </p>

                            <p>
                                Pedido Mínimo: {product.minimumQuantity}
                            </p>

                            <p>
                                Estoque: {product.total_stock}
                            </p>

                            <p className={styles.productDescription}>
                                {product.description}
                            </p>
                        </div>
                        <Button
                            className={styles.addToCartButton}
                            size="big"
                            animated="fade"
                            color="orange"
                            disabled={parseInt(product.total_stock) === 0}
                        >

                            <Button.Content visible>
                                {parseInt(product.total_stock) === 0 ?
                                    "Produto fora de estoque" :
                                    "Adicionar ao carrinho"
                                }

                            </Button.Content>

                            <Button.Content hidden>
                                <Icon size="big" name="shop"/>
                            </Button.Content>
                        </Button>

                    </div>
                </div>
                :
                <h2>Não foi possível encontrar o produto.</h2>
    );

}

export default ProductPage;