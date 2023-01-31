import {Icon, Button} from "semantic-ui-react";
import styles from "./ProductCard.module.css";
import {Link} from "react-router-dom";

export type ProductProps = {
    productInfo: {
        id: number,
        name: string,
        description: string,
        price: string,
        minimumQuantity: string,
        rating: number,
        hasFreeShipping: boolean,
        total_stock: number,
        image: [{
            url: string,
        }]
    }
};

/**
 * // This component is responsible to show the product info in a user-friendly way
 */
function ProductCard(props: ProductProps) {
    let {id, name, description, price, image, minimumQuantity, total_stock} = props.productInfo;

    function isOutOfStock() {
        return total_stock === 0;
    }

    return (
        <Link to={{pathname: "/product", search: `?id=${id}`}}>
            <div className={styles.card}>
                <div className={styles.top}>
                    <img className={styles.image} src={image[0].url}></img>
                </div>
                <div className={styles.middle}>
                    <p className={styles.productName}>{name}</p>
                    <p className={styles.minimumQuantity}>Pedido mínimo {minimumQuantity}</p>
                    <p className={styles.description}>{description}</p>
                </div>
                <div className={styles.bottom}>
                    <span className={styles.price}>R${parseFloat(price).toFixed(2)}</span>
                    <div className={styles.buttonRegion}>
                        {isOutOfStock() ? "Fora de estoque" : ""}
                        <Button
                            size="large"
                            className={styles.button}
                            animated="fade"
                            color="orange"
                            disabled={isOutOfStock()}
                        >
                            <Button.Content hidden>
                                +
                            </Button.Content>

                            <Button.Content visible>
                                <Icon size="large" name="plus cart"/>
                            </Button.Content>
                        </Button>
                    </div>
                </div>

            </div>
        </Link>
    )


}

export default ProductCard;
